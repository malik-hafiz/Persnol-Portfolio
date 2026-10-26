import { NextRequest, NextResponse } from 'next/server';
import { resend, CONTACT_EMAIL_RECIPIENT, CONTACT_EMAIL_SENDER } from '@/lib/resend';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message, projectType, budget, honeypot } = body;

    // Honeypot anti-spam check
    if (honeypot) {
      return NextResponse.json({ success: true, message: 'Message received.' });
    }

    // Input Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid name (at least 2 characters).' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: 'Please provide a detailed message (at least 10 characters).' },
        { status: 400 }
      );
    }

    const sanitizedName = name.trim().slice(0, 100);
    const sanitizedEmail = email.trim().toLowerCase().slice(0, 100);
    const sanitizedSubject = subject?.trim().slice(0, 150) || `New Project Inquiry from ${sanitizedName}`;
    const sanitizedMessage = message.trim().slice(0, 3000);
    const sanitizedProjectType = projectType?.trim().slice(0, 50) || 'General Inquiry';
    const sanitizedBudget = budget?.trim().slice(0, 50) || 'Not specified';

    // Check if Resend is configured with an active API key
    if (resend) {
      const emailResult = await resend.emails.send({
        from: CONTACT_EMAIL_SENDER,
        to: [CONTACT_EMAIL_RECIPIENT],
        replyTo: sanitizedEmail,
        subject: `[Portfolio Inquiry] ${sanitizedSubject}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #F6F1E6; padding: 32px 16px; color: #17130F;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border-radius: 16px; border: 1px solid rgba(23,19,15,0.08); overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
              <div style="background-color: #17130F; padding: 24px 32px; border-bottom: 3px solid #FF7A1A;">
                <h1 style="color: #F6F1E6; margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.5px;">New Portfolio Inquiry</h1>
                <p style="color: #FF7A1A; margin: 6px 0 0 0; font-size: 13px; font-weight: 600;">via Julian Vance Portfolio</p>
              </div>
              <div style="padding: 32px;">
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                  <tr>
                    <td style="padding: 8px 0; color: #6E6656; font-size: 13px; width: 120px; font-weight: 600;">From:</td>
                    <td style="padding: 8px 0; color: #17130F; font-size: 15px; font-weight: 600;">${sanitizedName} &lt;<a href="mailto:${sanitizedEmail}" style="color: #FF7A1A; text-decoration: none;">${sanitizedEmail}</a>&gt;</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6E6656; font-size: 13px; font-weight: 600;">Project Type:</td>
                    <td style="padding: 8px 0; color: #17130F; font-size: 14px;"><span style="background-color: #EFE8D8; padding: 4px 10px; border-radius: 9999px; font-size: 12px; font-weight: 600;">${sanitizedProjectType}</span></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6E6656; font-size: 13px; font-weight: 600;">Budget Range:</td>
                    <td style="padding: 8px 0; color: #17130F; font-size: 14px; font-weight: 500;">${sanitizedBudget}</td>
                  </tr>
                </table>
                <div style="background-color: #F6F1E6; border-radius: 12px; padding: 20px; border-left: 4px solid #FF7A1A; margin-top: 16px;">
                  <h3 style="margin: 0 0 10px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; color: #6E6656;">Message</h3>
                  <p style="margin: 0; white-space: pre-wrap; font-size: 15px; line-height: 1.6; color: #17130F;">${sanitizedMessage}</p>
                </div>
                <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #EFE8D8; text-align: center;">
                  <a href="mailto:${sanitizedEmail}?subject=Re: ${encodeURIComponent(sanitizedSubject)}" style="display: inline-block; background-color: #FF7A1A; color: #FFFFFF; padding: 12px 28px; border-radius: 9999px; text-decoration: none; font-weight: 700; font-size: 14px;">Reply to ${sanitizedName}</a>
                </div>
              </div>
            </div>
          </div>
        `,
      });

      if (emailResult.error) {
        console.error('Resend delivery error:', emailResult.error);
        return NextResponse.json(
          { success: false, error: emailResult.error.message || 'Failed to deliver email through Resend.' },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: 'Your message has been sent successfully! Julian will reply within 24 hours.',
      });
    } else {
      // Development / Demo Mode when RESEND_API_KEY is not configured
      console.warn(
        '[Portfolio Contact Form] RESEND_API_KEY is not defined in environment variables. Simulated email sent successfully for:',
        { sanitizedName, sanitizedEmail, sanitizedSubject, sanitizedProjectType }
      );

      return NextResponse.json({
        success: true,
        message:
          'Thank you! Your message was received successfully. (Demo mode: configure RESEND_API_KEY in .env.local to activate live Resend delivery).',
      });
    }
  } catch (err) {
    console.error('Contact API Error:', err);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
