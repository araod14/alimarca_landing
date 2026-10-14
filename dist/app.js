// Configure the confirmed commercial contacts here. Keep unknown values empty.
const CONTACT = Object.freeze({ whatsapp: '584124843172', phone: '584124843172', email: 'jmoreno@alimarca.com' });

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menú');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  navigation.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
});
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 1001px)').addEventListener('change', closeMenu);
document.querySelector('#year').textContent = new Date().getFullYear();

function enableChannel(id, label, href) {
  const container = document.querySelector(`#${id} > div`);
  const link = document.createElement('a');
  link.textContent = label;
  link.href = href;
  if (href.startsWith('https://')) { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
  if (id === 'whatsapp-channel') {
    const icon = document.querySelector(`#${id} > .channel-icon`);
    link.className = 'channel-icon';
    link.setAttribute('aria-label', label);
    link.title = label;
    link.replaceChildren(...icon.childNodes);
    icon.replaceWith(link);
    container.querySelector('span').remove();
    return;
  }
  container.querySelector('span').replaceWith(link);
}
if (/^[1-9]\d{6,14}$/.test(CONTACT.whatsapp)) {
  const whatsappHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent('Hola, quisiera solicitar una cotización para un proyecto. Servicio: __. Ubicación: __. Descripción: __.')}`;
  enableChannel('whatsapp-channel', 'Solicitar por WhatsApp', whatsappHref);
  document.querySelectorAll('[data-whatsapp-link]').forEach(link => {
    link.href = whatsappHref;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.hidden = false;
  });
}
if (/^[1-9]\d{6,14}$/.test(CONTACT.phone)) {
  enableChannel('phone-channel', `+${CONTACT.phone}`, `tel:+${CONTACT.phone}`);
}
if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(CONTACT.email)) {
  enableChannel('email-channel', CONTACT.email, `mailto:${CONTACT.email}?subject=${encodeURIComponent('Solicitud de cotización')}`);
}
if (document.querySelector('.contact-channels a')) {
  document.querySelector('.status').innerHTML = '<span></span> CONTACTO COMERCIAL';
  document.querySelector('.contact-panel > p').textContent = 'Cuéntanos el servicio que necesitas, la ubicación y los detalles de tu proyecto a través de nuestros canales disponibles.';
}
