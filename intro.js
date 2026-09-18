const loader = document.querySelector('.loader');
const menuTrigger = document.querySelector('.menu-trigger');
const menuPanel = document.querySelector('.menu-panel');
const gridTrigger = document.querySelector('.grid-trigger');
const gridOverlay = document.querySelector('.grid-overlay');

const dismissLoader = () => window.setTimeout(() => loader.classList.add('is-gone'), 180);

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', dismissLoader, { once: true });
} else {
  dismissLoader();
}

window.addEventListener('load', () => loader.classList.add('is-gone'), { once: true });

const setMenu = (open) => {
  menuPanel.classList.toggle('is-open', open);
  document.body.classList.toggle('menu-open', open);
  menuPanel.setAttribute('aria-hidden', String(!open));
  menuTrigger.setAttribute('aria-expanded', String(open));
  menuTrigger.textContent = open ? '关闭 CLOSE' : '菜单 MENU';
};

menuTrigger.addEventListener('click', () => setMenu(!menuPanel.classList.contains('is-open')));
menuPanel.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));

gridTrigger.addEventListener('click', () => {
  const active = gridOverlay.classList.toggle('is-visible');
  gridTrigger.setAttribute('aria-pressed', String(active));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});

document.querySelectorAll('.project-row').forEach((row) => {
  const image = row.querySelector('.hover-window img[data-src]');
  if (!image) return;
  const loadPreview = () => {
    if (image.src) return;
    image.decoding = 'async';
    image.src = image.dataset.src;
  };
  row.addEventListener('pointerenter', loadPreview, { once: true });
  row.addEventListener('focusin', loadPreview, { once: true });
});
