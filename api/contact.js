import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const escape = (str) =>
    str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { name, email, message } = req.body;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name?.trim() || !email?.trim() || !message?.trim()) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }

        if (message.length > 2000) {
            return res.status(400).json({ message: 'Message too long' });
        }

        const { data, error } = await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: ['arodv0908@gmail.com'],
            subject: `Nuevo mensaje de ${escape(name)}`,
            replyTo: email,
            html: `
        <div style="font-family: sans-serif; line-height: 1.5;">
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${escape(name)}</p>
          <p><strong>Email:</strong> ${escape(email)}</p>
          <p><strong>Mensaje:</strong></p>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 5px;">
            ${escape(message).replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
        });

        if (error) {
            return res.status(400).json({ success: false, error });
        }

        return res.status(200).json({ success: true, id: data.id });
    } catch (error) {
        console.error('Resend Error:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}