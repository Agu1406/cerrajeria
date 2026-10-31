import nodemailer from 'nodemailer';

export function escapeHtml(text) {
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return String(text).replace(/[&<>"']/g, (m) => map[m]);
}

export function mailConfig() {
  const to = process.env.CONTACT_EMAIL || '';
  const useResend = !!process.env.RESEND_API_KEY && !!to;
  const useSmtp =
    !!process.env.SMTP_HOST && !!process.env.SMTP_USER && !!process.env.SMTP_PASS && !!to;
  return { to, useResend, useSmtp };
}

export function jsonResponse(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json',
    },
  });
}

export function preflight(request) {
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }
  if (request.method !== 'POST') {
    return jsonResponse({ error: true, message: 'Método no permitido' }, 405);
  }
  return null;
}

export async function sendHtmlMail({ subject, html, replyTo }) {
  const { to, useResend, useSmtp } = mailConfig();
  if (!useResend && !useSmtp) {
    const error = new Error('Correo no configurado');
    error.code = 'MAIL_UNCONFIGURED';
    throw error;
  }

  if (useResend) {
    const from = process.env.RESEND_FROM || `Cerrajeros Madrid <${to}>`;
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        html,
        reply_to: replyTo || undefined,
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      console.error('Resend error:', res.status, data);
      const error = new Error('Resend rechazó el envío');
      throw error;
    }
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to,
    subject,
    html,
    replyTo: replyTo || undefined,
  });
}
