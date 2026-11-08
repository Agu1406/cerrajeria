/** Reveal al scroll: opacidad + 12px, una vez. Sin JS o con reduced-motion todo se ve. */
export function initReveal() {
  if (typeof document === 'undefined') return;
  if (document.documentElement.dataset.motion !== 'on') return;

  const nodes = document.querySelectorAll<HTMLElement>('.reveal');
  if (!nodes.length || !('IntersectionObserver' in window)) {
    nodes.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
  );

  nodes.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      el.classList.add('is-visible');
    } else {
      io.observe(el);
    }
  });
}
