
/* HandBridge - static GitHub Pages adaptation */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      let notice = form.querySelector('[data-static-notice]');
      if (!notice) {
        notice = document.createElement('p');
        notice.setAttribute('data-static-notice', '');
        notice.setAttribute('role', 'status');
        notice.style.cssText = 'margin-top:14px;padding:12px;border-radius:10px;background:#fff3cd;color:#664d03;font-size:.95rem;';
        form.appendChild(notice);
      }
      notice.textContent = 'Esta demostración está publicada como sitio estático. El envío y el guardado de datos requieren conectar un backend seguro.';
    });
  });
});
