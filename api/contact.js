/**
 * Vercel serverless: formulario de contacto.
 * Credenciales en el entorno (RESEND_* o SMTP_* y CONTACT_EMAIL). No van en el repo.
 */
import { escapeHtml, jsonResponse, mailConfig, preflight, sendHtmlMail } from './lib/mail.js';

export default {
  async fetch(request) {
    const early = preflight(request);
    if (early) return early;

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
    const formTitle = (body.formTitle || '').trim() || 'Formulario de contacto';

    if (body.privacyConsent !== '1') {
      return jsonResponse(
        { error: true, message: 'Debes aceptar la política de privacidad y declarar que tienes 14 años o más.' },
        400
      );
    }

    if (!email || !mensaje) {
      return jsonResponse({ error: true, message: 'Indica correo y mensaje' }, 400);
    }

    const { useResend, useSmtp } = mailConfig();
    if (!useResend && !useSmtp) {
      return jsonResponse(
        { error: true, message: 'El formulario no está configurado. Usa el teléfono o WhatsApp.' },
        503
      );
    }

    const quien = nombre || email;
    const subject = barrio ? `${barrio} · ${formTitle} (${quien})` : `${formTitle} (${quien})`;
    const html = `
      <p>Consulta recibida. No es un correo comercial al cliente: este mensaje solo llega al negocio.</p>
      ${nombre ? `<p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>` : ''}
      ${movil ? `<p><strong>Móvil:</strong> ${escapeHtml(movil)}</p>` : ''}
      <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
      ${barrio ? `<p><strong>Zona/Barrio:</strong> ${escapeHtml(barrio)}</p>` : ''}
      <p><strong>Consentimiento:</strong> política de privacidad y declaración de 14 años o más.</p>
      <p><strong>Mensaje:</strong></p>
      <p>${escapeHtml(mensaje).replace(/\n/g, '<br>')}</p>
    `;

    try {
      await sendHtmlMail({ subject, html, replyTo: email });
      return jsonResponse({ ok: true });
    } catch (err) {
      console.error('Error enviando correo:', err);
      return jsonResponse(
        { error: true, message: 'No se pudo enviar el mensaje. Llama por teléfono.' },
        500
      );
    }
  },
};
