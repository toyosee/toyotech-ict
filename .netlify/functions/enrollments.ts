import { Handler } from '@netlify/functions';
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

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ 
        success: false, 
        error: 'Method not allowed' 
      }),
    };
  }

  try {
    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          error: 'Request body is required'
        }),
      };
    }

    const { firstName, lastName, email, phone, course, experienceLevel, message }: EnrollmentData = JSON.parse(event.body);

    // Validation
    if (!firstName || !lastName || !email || !course) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          error: 'First name, last name, email, and course are required'
        }),
      };
    }

    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email credentials not configured');
      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          error: 'Server configuration error'
        }),
      };
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || 'hello@toyotechnict.com',
      subject: `🎓 New Enrollment: ${course}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #5680c4 0%, #f26726 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0;">New Course Enrollment</h2>
          </div>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px;">
            <div style="margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px;">
              <strong style="color: #5680c4;">👤 Student:</strong> ${firstName} ${lastName}
            </div>
            <div style="margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px;">
              <strong style="color: #5680c4;">📧 Email:</strong> <a href="mailto:${email}">${email}</a>
            </div>
            <div style="margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px;">
              <strong style="color: #5680c4;">📱 Phone:</strong> ${phone}
            </div>
            <div style="margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px;">
              <strong style="color: #5680c4;">📚 Course:</strong> ${course}
            </div>
            <div style="margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px;">
              <strong style="color: #5680c4;">🎯 Experience Level:</strong> ${experienceLevel}
            </div>
            ${message ? `
            <div style="margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px;">
              <strong style="color: #5680c4;">💬 Additional Notes:</strong>
              <p style="margin: 10px 0 0 0; white-space: pre-line;">${message}</p>
            </div>
            ` : ''}
            <div style="margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px;">
              <strong style="color: #5680c4;">🕒 Submitted:</strong> ${new Date().toLocaleString()}
            </div>
          </div>
        </div>
      `,
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({
        success: true,
        message: 'Enrollment submitted successfully! We will contact you soon.'
      }),
    };

  } catch (error: unknown) {
    console.error('Enrollment error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: 'Failed to submit enrollment. Please try again later.'
      }),
    };
  }
};

export { handler };