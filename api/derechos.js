/**
 * Solicitud de derechos RGPD. No hay base de datos: el correo interno describe
 * la inactivación y los plazos. Un reintento del cliente se corta en el navegador.
 */
import { escapeHtml, jsonResponse, mailConfig, preflight, sendHtmlMail } from './lib/mail.js';
import { flujoSupresion, retention } from '../src/data/retention.js';

const DERECHOS = {
  acceso: 'Acceso',
  rectificacion: 'Rectificación',
  supresion: 'Supresión',
  oposicion: 'Oposición',
  limitacion: 'Limitación',
  portabilidad: 'Portabilidad',
};

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

    const email = (body.email || '').trim();
    const nombre = (body.nombre || '').trim();
    const derecho = (body.derecho || '').trim();
    const mensaje = (body.mensaje || '').trim();
    const etiqueta = DERECHOS[derecho];

    if (body.privacyConsent !== '1') {
      return jsonResponse(
        { error: true, message: 'Debes aceptar la política de privacidad y declarar que tienes 14 años o más.' },
        400
      );
    }
    if (!email || !mensaje || !etiqueta) {
      return jsonResponse({ error: true, message: 'Indica correo, derecho y qué solicitas' }, 400);
    }

    const { useResend, useSmtp } = mailConfig();
    if (!useResend && !useSmtp) {
      return jsonResponse(
        { error: true, message: 'El formulario no está configurado. Escríbenos por correo o llama.' },
        503
      );
    }

    const subject = `Derechos RGPD: ${etiqueta} (${email})`;
    const html = `
      <p><strong>Derecho:</strong> ${escapeHtml(etiqueta)}</p>
      ${nombre ? `<p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>` : ''}
      <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
      <p><strong>Solicitud:</strong></p>
      <p>${escapeHtml(mensaje).replace(/\n/g, '<br>')}</p>
      <hr>
      <p><strong>Qué hacer (no borrar a ciegas):</strong></p>
      <ol>
        ${flujoSupresion.map((paso) => `<li>${escapeHtml(paso)}</li>`).join('')}
      </ol>
      <p>
        Consultas y contacto: ${escapeHtml(retention.contacto)}<br>
        Facturas: ${escapeHtml(retention.facturas)}<br>
        Documentación mercantil: ${escapeHtml(retention.mercantil)}<br>
        Registros técnicos: ${escapeHtml(retention.logs)}
      </p>
      <p>No enviamos newsletter. Esta petición es el cauce para que no se vuelva a escribir a esta persona.</p>
    `;

    try {
      await sendHtmlMail({ subject, html, replyTo: email });
      return jsonResponse({ ok: true });
    } catch (err) {
      console.error('Error enviando derechos:', err);
      return jsonResponse(
        { error: true, message: 'No se pudo enviar. Escríbenos por correo o llama.' },
        500
      );
    }
  },
};
