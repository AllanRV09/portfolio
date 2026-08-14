import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 2000;

const escape = (str) =>
    str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        if (
            !req.body ||
            typeof req.body !== 'object' ||
            Array.isArray(req.body)
        ) {
            return res.status(400).json({ message: 'Invalid request' });
        }

        const { name, email, message, website } = req.body;

        const honeypotWasFilled =
            website !== undefined &&
            (typeof website !== 'string' || website.length > 0);

        if (honeypotWasFilled) {
            return res.status(200).json({ message: 'Message sent successfully' });
        }

        if (
            typeof name !== 'string' ||
            typeof email !== 'string' ||
            typeof message !== 'string'
        ) {
            return res.status(400).json({ message: 'Invalid request' });
        }

        const normalizedName = name.trim();
        const normalizedEmail = email.trim();
        const normalizedMessage = message.trim();

        if (!normalizedName || !normalizedEmail || !normalizedMessage) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        if (
            normalizedName.length > MAX_NAME_LENGTH ||
            normalizedEmail.length > MAX_EMAIL_LENGTH ||
            normalizedMessage.length > MAX_MESSAGE_LENGTH
        ) {
            return res.status(400).json({ message: 'Field exceeds maximum length' });
        }

        if (!EMAIL_REGEX.test(normalizedEmail)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }

        const { data, error } = await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: ['arodv0908@gmail.com'],
            subject: `Nuevo mensaje de ${escape(normalizedName)}`,
            replyTo: normalizedEmail,
            html: `
        <div style="font-family: sans-serif; line-height: 1.5;">
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${escape(normalizedName)}</p>
          <p><strong>Email:</strong> ${escape(normalizedEmail)}</p>
          <p><strong>Mensaje:</strong></p>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 5px;">
            ${escape(normalizedMessage).replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
        });

        if (error) {
            console.error('Resend Error:', error);
            return res.status(500).json({
                success: false,
                message: 'Unable to send message',
            });
        }

        return res.status(200).json({ success: true, id: data.id });
    } catch (error) {
        console.error('Contact Endpoint Error:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}
