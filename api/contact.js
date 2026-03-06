/**
 * Vercel serverless: enviar formulario de contacto por correo (SMTP).
 * Variables de entorno en Vercel:
 *   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL
 * Ej.: correo creado en Dinahosting → datos SMTP aquí.
 */
import nodemailer from 'nodemailer';

function getCorsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

export default {
  async fetch(request) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: getCorsHeaders() });
    }

    if (request.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: true, message: 'Método no permitido' }),
        { status: 405, headers: { ...getCorsHeaders(), 'Content-Type': 'application/json' } }
      );
    }

    const required = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS', 'CONTACT_EMAIL'];
    const missing = required.filter((k) => !process.env[k]);
    if (missing.length) {
      console.error('Faltan variables de entorno:', missing.join(', '));
      return new Response(
        JSON.stringify({
          error: true,
          message: 'Configuración del servidor incompleta. Contacta por teléfono.',
        }),
        { status: 503, headers: { ...getCorsHeaders(), 'Content-Type': 'application/json' } }
      );
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(
        JSON.stringify({ error: true, message: 'Datos inválidos' }),
        { status: 400, headers: { ...getCorsHeaders(), 'Content-Type': 'application/json' } }
      );
    }

    const nombre = (body.nombre || '').trim();
    const telefono = (body.telefono || '').trim();
    const mensaje = (body.mensaje || '').trim();
    const barrio = (body.barrio || '').trim();

    if (!nombre || !telefono || !mensaje) {
      return new Response(
        JSON.stringify({ error: true, message: 'Faltan nombre, teléfono o mensaje' }),
        { status: 400, headers: { ...getCorsHeaders(), 'Content-Type': 'application/json' } }
      );
    }

    const to = process.env.CONTACT_EMAIL;
    const subject = barrio
      ? `Consulta cerrajería - ${barrio} (${nombre})`
      : `Consulta contacto (${nombre})`;
    const html = `
      <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
      <p><strong>Teléfono:</strong> ${escapeHtml(telefono)}</p>
      ${barrio ? `<p><strong>Zona/Barrio:</strong> ${escapeHtml(barrio)}</p>` : ''}
      <p><strong>Mensaje:</strong></p>
      <p>${escapeHtml(mensaje).replace(/\n/g, '<br>')}</p>
    `;

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to,
      subject,
      html,
      replyTo: body.email ? body.email.trim() : undefined,
    };

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const retryableCodes = new Set(['EBUSY', 'EDNS', 'ETIMEDOUT', 'ECONNRESET', 'ECONNREFUSED', 'ESOCKET']);
    const maxAttempts = 3;
    let lastErr;

    try {
      for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
          await transporter.sendMail(mailOptions);
          return new Response(JSON.stringify({ ok: true }), {
            status: 200,
            headers: { ...getCorsHeaders(), 'Content-Type': 'application/json' },
          });
        } catch (err) {
          lastErr = err;
          const code = err.code || '';
          if (attempt < maxAttempts && retryableCodes.has(code)) {
            await new Promise((r) => setTimeout(r, 1500 * attempt));
            continue;
          }
          throw err;
        }
      }
      throw lastErr;
    } catch (err) {
      console.error('Error enviando correo:', err);
      return new Response(
        JSON.stringify({
          error: true,
          message: 'No se pudo enviar el mensaje. Llama por teléfono.',
        }),
        { status: 500, headers: { ...getCorsHeaders(), 'Content-Type': 'application/json' } }
      );
    }
  },
};

function escapeHtml(text) {
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return String(text).replace(/[&<>"']/g, (m) => map[m]);
}
