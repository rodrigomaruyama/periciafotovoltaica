(() => {
  const menu = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    nav.classList.toggle('is-open', open);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {menu.setAttribute('aria-expanded', 'false');nav.classList.remove('is-open');}));
  document.getElementById('year').textContent = new Date().getFullYear();
  const config = window.SITE_CONFIG || {};
  const email = String(config.email || '').trim();
  const phone = String(config.whatsapp || '').replace(/\D/g, '');
  const emailLink = document.getElementById('email-link');
  const waLink = document.getElementById('whatsapp-link');
  const note = document.getElementById('contact-note');
  if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailLink.textContent = 'Enviar e-mail ↗';
    emailLink.href = `mailto:${email}?subject=${encodeURIComponent('Solicitação de avaliação técnica fotovoltaica')}`;
    emailLink.removeAttribute('aria-disabled');
    note.textContent = email;
  } else {emailLink.addEventListener('click', e => e.preventDefault());}
  if (phone.length >= 12 && phone.length <= 15) {
    waLink.hidden = false;
    waLink.href = `https://wa.me/${phone}?text=${encodeURIComponent(config.whatsappMessage || 'Olá, gostaria de solicitar uma avaliação técnica.')}`;
    waLink.rel = 'noopener noreferrer';
    waLink.target = '_blank';
    if (!email) note.textContent = 'Contato pelo WhatsApp';
  }
})();
