"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
// Helper function to sanitize HTML inputs
const sanitizeHtml = (text) => {
    if (!text)
        return '';
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
};
// Define shared headers to ensure type consistency
const sharedHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
};
const handler = async (event) => {
    // Handle CORS preflight requests
    // 1. Handle CORS preflight
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
        const { name, email, phone, inquiryType, subject, message } = JSON.parse(event.body);
        if (!name || !email || !message) {
            return {
                statusCode: 400,
                headers: sharedHeaders,
                body: JSON.stringify({ success: false, error: 'Name, email, and message are required' }),
            };
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return {
                statusCode: 400,
                headers: sharedHeaders,
                body: JSON.stringify({ success: false, error: 'Invalid email format' }),
            };
        }
        const emailUser = process.env.EMAIL_USER;
        const emailPass = process.env.EMAIL_PASS;
        if (!emailUser || !emailPass) {
            return {
                statusCode: 500,
                headers: sharedHeaders,
                body: JSON.stringify({ success: false, error: 'Server configuration error' }),
            };
        }
        // Sanitize inputs for HTML
        const safeName = sanitizeHtml(name);
        const safeEmail = sanitizeHtml(email);
        const safePhone = phone ? sanitizeHtml(phone) : '';
        const safeInquiryType = inquiryType ? sanitizeHtml(inquiryType) : '';
        const safeSubject = subject ? sanitizeHtml(subject) : 'General Inquiry';
        const safeMessage = sanitizeHtml(message);
        // Get site URL from environment or use default
        const siteUrl = process.env.URL || 'https://toyotechnict.com';
        const adminEmail = process.env.ADMIN_EMAIL || 'hello@toyotechnict.com';
        const emailHost = process.env.EMAIL_HOST || 'smtp.gmail.com';
        const emailPort = parseInt(process.env.EMAIL_SMTP_PORT || '587');
        // Create email transporter
        const transporter = nodemailer_1.default.createTransport({
            host: emailHost,
            port: emailPort,
            secure: emailPort === 465, // true for 465, false for other ports
            auth: {
                user: emailUser,
                pass: emailPass,
            },
        });
        // Email to admin
        await transporter.sendMail({
            from: `"ToyotechnICT Website" <${emailUser}>`,
            replyTo: email,
            to: adminEmail,
            subject: `🚀 New Contact: ${safeSubject}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #5680c4 0%, #f26726 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0;">New Contact Form Submission</h2>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">ToyotechnICT Solutions</p>
          </div>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px;">
            <div style="margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px;">
              <strong style="color: #5680c4;">👤 Name:</strong> ${safeName}
            </div>
            <div style="margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px;">
              <strong style="color: #5680c4;">📧 Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a>
            </div>
            ${safePhone ? `
            <div style="margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px;">
              <strong style="color: #5680c4;">📱 Phone:</strong> ${safePhone}
            </div>
            ` : ''}
            ${safeInquiryType ? `
            <div style="margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px;">
              <strong style="color: #5680c4;">🎯 Inquiry Type:</strong> ${safeInquiryType}
            </div>
            ` : ''}
            <div style="margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px;">
              <strong style="color: #5680c4;">📝 Subject:</strong> ${safeSubject}
            </div>
            <div style="margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px;">
              <strong style="color: #5680c4;">💬 Message:</strong>
              <p style="margin: 10px 0 0 0; white-space: pre-line;">${safeMessage}</p>
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
            from: `"ToyotechnICT Solutions" <${emailUser}>`,
            to: email,
            subject: 'Thank you for contacting ToyotechnICT Solutions',
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #5680c4 0%, #f26726 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
            <h2 style="margin: 0;">Thank You for Reaching Out! 🚀</h2>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">ToyotechnICT Solutions - A Step into the Future</p>
          </div>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px;">
            <p>Dear <strong>${safeName}</strong>,</p>
            
            <p>Thank you for contacting ToyotechnICT Solutions. We have received your message and our team will review it shortly.</p>
            
            <div style="background: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p><strong>📧 Your Inquiry Details:</strong></p>
              <p><strong>Subject:</strong> ${safeSubject}</p>
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
              <li><a href="${siteUrl}/courses">View Our Courses</a></li>
              <li><a href="${siteUrl}/incubation">Learn About Incubation</a></li>
              <li><a href="${siteUrl}/about">About ToyotechnICT</a></li>
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
            },
            body: JSON.stringify({
                success: true,
                message: 'Message sent successfully! We will respond between 24-48 hours.'
            }),
        };
    }
    catch (error) {
        console.error('Contact form error:', {
            error: error instanceof Error ? error.message : 'Unknown error',
            timestamp: new Date().toISOString(),
        });
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                success: false,
                error: 'Failed to send message. Please try again later.'
            }),
        };
    }
};
exports.handler = handler;
//# sourceMappingURL=contact.js.map