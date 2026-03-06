/**
 * Vercel serverless: formulario de contacto.
 *
 * Opción 1 – Resend: RESEND_API_KEY + CONTACT_EMAIL (y opcional RESEND_FROM).
 * Opción 2 – Gmail u otro SMTP: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL.
 *   Gmail: host=smtp.gmail.com, port=587, secure=false; usuario=tu@gmail.com, contraseña=contraseña de aplicación.
 */
import nodemailer from 'nodemailer';

function getCorsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

function jsonResponse(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { ...getCorsHeaders(), 'Content-Type': 'application/json' },
  });
}

export default {
  async fetch(request) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: getCorsHeaders() });
    }

    if (request.method !== 'POST') {
      return jsonResponse({ error: true, message: 'Método no permitido' }, 405);
    }

    const useResend = !!process.env.RESEND_API_KEY && !!process.env.CONTACT_EMAIL;
    const useSmtp =
      !!process.env.SMTP_HOST &&
      !!process.env.SMTP_USER &&
      !!process.env.SMTP_PASS &&
      !!process.env.CONTACT_EMAIL;

    if (!useResend && !useSmtp) {
      return jsonResponse({
        error: true,
        message: 'El formulario no está configurado. Usa el teléfono o WhatsApp.',
      }, 503);
    }

    const to = process.env.CONTACT_EMAIL;

    let body;
    try {
      body = await request.json();
    } catch {
      return jsonResponse({ error: true, message: 'Datos inválidos' }, 400);
    }

    const nombre = (body.nombre || '').trim();
    const movil = (body.movil || '').trim();
    const email = (body.email || '').trim();
    const mensaje = (body.mensaje || '').trim();
    const barrio = (body.barrio || '').trim();

    if (!email || !mensaje) {
      return jsonResponse({ error: true, message: 'Indica correo y mensaje' }, 400);
    }

    const quien = nombre || email;
    const subject = barrio
      ? `Consulta cerrajería - ${barrio} (${quien})`
      : `Consulta contacto (${quien})`;
    const html = `
      ${nombre ? `<p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>` : ''}
      ${movil ? `<p><strong>Móvil:</strong> ${escapeHtml(movil)}</p>` : ''}
      <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
      ${barrio ? `<p><strong>Zona/Barrio:</strong> ${escapeHtml(barrio)}</p>` : ''}
      <p><strong>Mensaje:</strong></p>
      <p>${escapeHtml(mensaje).replace(/\n/g, '<br>')}</p>
    `;

    try {
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
            reply_to: email || undefined,
          }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          console.error('Resend error:', res.status, data);
          return jsonResponse({
            error: true,
            message: 'No se pudo enviar el mensaje. Llama por teléfono.',
          }, 500);
        }
        return jsonResponse({ ok: true });
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
        replyTo: email || undefined,
      });

      return jsonResponse({ ok: true });
    } catch (err) {
      console.error('Error enviando correo:', err);
      return jsonResponse({
        error: true,
        message: 'No se pudo enviar el mensaje. Llama por teléfono.',
      }, 500);
    }
  },
};

function escapeHtml(text) {
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return String(text).replace(/[&<>"']/g, (m) => map[m]);
}
