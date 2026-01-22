import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  inquiryType?: string;
  subject: string;
  message: string;
}

const handler: Handler = async (event) => {
  // Only allow POST requests
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

    const { name, email, phone, inquiryType, subject, message }: ContactFormData = JSON.parse(event.body);

    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          error: 'Name, email, and message are required'
        }),
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          error: 'Invalid email format'
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

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || 'hello@toyotechnict.com',
      subject: `🚀 ToyotechnICT Contact: ${subject || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #5680c4 0%, #f26726 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0;">New Contact Form Submission</h2>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">ToyotechnICT Solutions</p>
          </div>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px;">
            <div style="margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px;">
              <strong style="color: #5680c4;">👤 Name:</strong> ${name}
            </div>
            <div style="margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px;">
              <strong style="color: #5680c4;">📧 Email:</strong> <a href="mailto:${email}">${email}</a>
            </div>
            ${phone ? `
            <div style="margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px;">
              <strong style="color: #5680c4;">📱 Phone:</strong> ${phone}
            </div>
            ` : ''}
            ${inquiryType ? `
            <div style="margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px;">
              <strong style="color: #5680c4;">🎯 Inquiry Type:</strong> ${inquiryType}
            </div>
            ` : ''}
            <div style="margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px;">
              <strong style="color: #5680c4;">📝 Subject:</strong> ${subject || 'General Inquiry'}
            </div>
            <div style="margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px;">
              <strong style="color: #5680c4;">💬 Message:</strong>
              <p style="margin: 10px 0 0 0; white-space: pre-line;">${message}</p>
            </div>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
              <p>This message was sent from the ToyotechnICT website contact form.</p>
              <p>© ${new Date().getFullYear()} ToyotechnICT Solutions. All rights reserved.</p>
            </div>
          </div>
        </div>
      `,
    });

    // Auto-reply to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting ToyotechnICT Solutions',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #5680c4 0%, #f26726 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
            <h2 style="margin: 0;">Thank You for Reaching Out! 🚀</h2>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">ToyotechnICT Solutions - A Step into the Future</p>
          </div>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px;">
            <p>Dear <strong>${name}</strong>,</p>
            
            <p>Thank you for contacting ToyotechnICT Solutions. We have received your message and our team will review it shortly.</p>
            
            <div style="background: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p><strong>📧 Your Inquiry Details:</strong></p>
              <p><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
              <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <p><strong>⏱️ What to Expect:</strong></p>
            <ul>
              <li>We typically respond within <strong>24-48 hours</strong> during business days</li>
              <li>For urgent matters, you can call us at <strong>+234 80-6921-3941</strong></li>
              <li>Visit our office at <strong>NO.1 Gongola Road, Barnawa. Kaduna.</strong></li>
            </ul>
            
            <p><strong>📚 Quick Links:</strong></p>
            <ul>
              <li><a href="${process.env.URL}/courses">View Our Courses</a></li>
              <li><a href="${process.env.URL}/incubation">Learn About Incubation</a></li>
              <li><a href="${process.env.URL}/about">About ToyotechnICT</a></li>
            </ul>
            
            <p>Best regards,<br>
            <strong>The ToyotechnICT Team</strong></p>
          </div>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px; text-align: center;">
            <p>This is an automated response. Please do not reply to this email.</p>
            <p>© ${new Date().getFullYear()} ToyotechnICT Solutions. All rights reserved.</p>
            <p>NO.1 Gongola Road, Barnawa. Kaduna. | +234 80-6921-3941 | hello@toyotechnict.com</p>
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
        message: 'Message sent successfully! Check your email for confirmation.'
      }),
    };

  } catch (error: unknown) {
    console.error('Contact form error:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: 'Failed to send message. Please try again later.'
      }),
    };
  }
};

export { handler };