/** Un envío a la vez por formulario. Un segundo clic mientras espera no crea otra petición. */
export function bindAjaxForm(form: HTMLFormElement) {
  if (form.dataset.bound === '1') return;
  form.dataset.bound = '1';
  let sending = false;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (sending) return;

    const feedback = form.querySelector('.contact-form-feedback') as HTMLDivElement | null;
    const submitBtn = form.querySelector('.ajax-form-submit, .contact-form-submit') as HTMLButtonElement | null;
    if (!feedback || !submitBtn) return;

    feedback.classList.add('hidden');
    feedback.classList.remove('text-red-400', 'text-brass');

    const privacy = form.querySelector('[name="privacyConsent"]') as HTMLInputElement | null;
    if (privacy && !privacy.checked) {
      feedback.textContent = form.dataset.msgPrivacy || 'Debes aceptar la política de privacidad.';
      feedback.classList.add('text-red-400');
      feedback.classList.remove('hidden');
      privacy.focus();
      return;
    }

    sending = true;
    submitBtn.disabled = true;
    const label = form.dataset.labelSubmit || submitBtn.textContent || '';
    submitBtn.textContent = form.dataset.msgSending || 'Enviando...';

    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: boolean; message?: string };

      if (res.ok && !json.error) {
        feedback.textContent = form.dataset.msgSuccess || 'Enviado.';
        feedback.classList.add('text-brass');
        feedback.classList.remove('hidden');
        form.reset();
      } else {
        feedback.textContent = json.message || form.dataset.msgError || 'No se pudo enviar.';
        feedback.classList.add('text-red-400');
        feedback.classList.remove('hidden');
      }
    } catch {
      feedback.textContent = form.dataset.msgNetwork || 'Error de conexión.';
      feedback.classList.add('text-red-400');
      feedback.classList.remove('hidden');
    }

    sending = false;
    submitBtn.disabled = false;
    submitBtn.textContent = label;
  });
}
