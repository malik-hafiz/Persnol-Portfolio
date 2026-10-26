import { Resend } from 'resend';

// Initialize Resend client safely
const resendApiKey = process.env.RESEND_API_KEY;

export const resend = resendApiKey ? new Resend(resendApiKey) : null;

export const CONTACT_EMAIL_RECIPIENT = process.env.CONTACT_EMAIL_TO || 'julian.vance@example.com';
export const CONTACT_EMAIL_SENDER = process.env.CONTACT_EMAIL_FROM || 'Portfolio Contact <onboarding@resend.dev>';
