import { Handler, HandlerResponse } from '@netlify/functions';
import nodemailer from 'nodemailer';

interface EnrollmentData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  course: string;
  experienceLevel: string;
  message?: string;
}

// Reuse the sanitizer for security
const sanitizeHtml = (text: string): string => {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

// Consistent headers to satisfy TypeScript
const sharedHeaders: Record<string, string> = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json',
};

const handler: Handler = async (event): Promise<HandlerResponse> => {
  // 1. Handle CORS Preflight (Crucial for browser compatibility)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        ...sharedHeaders,
        'Access-Control-Max-Age': '86400',
      },
      body: '',
    };
  }

  // 2. Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: sharedHeaders,
      body: JSON.stringify({ success: false, error: 'Method not allowed' }),
    };
  }

  try {
    if (!event.body) {
      return {
        statusCode: 400,
        headers: sharedHeaders,
        body: JSON.stringify({ success: false, error: 'Request body is required' }),
      };
    }

    const { firstName, lastName, email, phone, course, experienceLevel, message }: EnrollmentData = JSON.parse(event.body);

    // 3. Validation
    if (!firstName || !lastName || !email || !course) {
      return {
        statusCode: 400,
        headers: sharedHeaders,
        body: JSON.stringify({
          success: false,
          error: 'First name, last name, email, and course are required'
        }),
      };
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    
    if (!emailUser || !emailPass) {
      console.error('Email credentials missing');
      return {
        statusCode: 500,
        headers: sharedHeaders,
        body: JSON.stringify({ success: false, error: 'Server configuration error' }),
      };
    }

    // 4. Sanitize Inputs
    const safeName = sanitizeHtml(`${firstName} ${lastName}`);
    const safeEmail = sanitizeHtml(email);
    const safeCourse = sanitizeHtml(course);
    const safeLevel = sanitizeHtml(experienceLevel);
    const safeMessage = message ? sanitizeHtml(message) : 'No additional notes provided.';

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_SMTP_PORT || '587'),
      secure: process.env.EMAIL_SMTP_PORT === '465',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // 5. Send Notification Email
    await transporter.sendMail({
      from: `"ToyotechICT Admissions" <${emailUser}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `🎓 New Enrollment: ${safeCourse}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #5680c4 0%, #f26726 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0;">New Course Enrollment</h2>
          </div>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px;">
            <p><strong>👤 Student:</strong> ${safeName}</p>
            <p><strong>📧 Email:</strong> ${safeEmail}</p>
            <p><strong>📱 Phone:</strong> ${sanitizeHtml(phone)}</p>
            <p><strong>📚 Course:</strong> ${safeCourse}</p>
            <p><strong>🎯 Level:</strong> ${safeLevel}</p>
            <p><strong>💬 Notes:</strong></p>
            <p style="white-space: pre-line;">${safeMessage}</p>
          </div>
        </div>
      `,
    });

    return {
      statusCode: 200,
      headers: sharedHeaders,
      body: JSON.stringify({
        success: true,
        message: 'Enrollment submitted successfully! We will contact you soon.'
      }),
    };

  } catch (error: unknown) {
    console.error('Enrollment error:', error);
    return {
      statusCode: 500,
      headers: sharedHeaders,
      body: JSON.stringify({
        success: false,
        error: 'Failed to submit enrollment. Please try again later.'
      }),
    };
  }
};

export { handler };