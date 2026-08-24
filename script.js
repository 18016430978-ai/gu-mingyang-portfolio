const projectPages = {
  'yuhuashi-info': ['assets/works/yuhuashi-info/01.jpg', 'assets/works/yuhuashi-info/02.jpg', 'assets/works/yuhuashi-info/03.jpg', 'assets/works/yuhuashi-info/04.jpg'],
  'yuhuashi-installation': ['assets/works/yuhuashi-installation/01.jpg', 'assets/works/yuhuashi-installation/02.jpg', 'assets/works/yuhuashi-installation/03.jpg', 'assets/works/yuhuashi-installation/04.jpg'],
  nature: ['assets/works/nature/01.jpg', 'assets/works/nature/02.jpg', 'assets/works/nature/03.jpg', 'assets/works/nature/04.jpg', 'assets/works/nature/05.jpg', 'assets/works/nature/06.jpg'],
  tongqu: ['assets/works/tongqu/01.jpg', 'assets/works/tongqu/02.jpg', 'assets/works/tongqu/03.jpg', 'assets/works/tongqu/04.jpg', 'assets/works/tongqu/05.jpg'],
  coffee: ['assets/works/coffee/01.jpg', 'assets/works/coffee/02.jpg', 'assets/works/coffee/03.jpg', 'assets/works/coffee/04.jpg', 'assets/works/coffee/05.jpg'],
  tangsancai: ['assets/works/tangsancai/01.jpg', 'assets/works/tangsancai/02.jpg', 'assets/works/tangsancai/03.jpg'],
  space: ['assets/works/space/01.jpg', 'assets/works/space/02.jpg'],
  dopamine: ['assets/works/dopamine/01.jpg', 'assets/works/dopamine/02.jpg'],
  appetite: ['assets/works/appetite/01.jpg', 'assets/works/appetite/02.jpg'],
  cpus: ['assets/works/cpus/01.jpg', 'assets/works/cpus/02.jpg'],
};

const projectCovers = {
  'yuhuashi-info': 'assets/covers/yuhuashi-info.jpg',
  'yuhuashi-installation': 'assets/covers/yuhuashi-installation.jpg',
  nature: 'assets/covers/nature.jpg',
  tongqu: 'assets/covers/tongqu.jpg',
  coffee: 'assets/covers/coffee.jpg',
  tangsancai: 'assets/covers/tangsancai.jpg',
  space: 'assets/covers/space.jpg',
  dopamine: 'assets/covers/dopamine.jpg',
  appetite: 'assets/covers/appetite.jpg',
  cpus: 'assets/covers/cpus.jpg',
};

const projectVideos = {
  'yuhuashi-installation': { src: 'assets/videos/yuhuashi-installation.mp4', type: 'video/mp4' },
  nature: { src: 'assets/videos/nature-web.webm', type: 'video/webm' },
  tongqu: { src: 'assets/videos/tongqu-web.webm', type: 'video/webm' },
};

const loader = document.querySelector('.loader');
const gridTrigger = document.querySelector('.grid-trigger');
const gridOverlay = document.querySelector('.grid-overlay');
const menuTrigger = document.querySelector('.menu-trigger');
const menuPanel = document.querySelector('.menu-panel');

window.addEventListener('load', () => {
  window.setTimeout(() => loader.classList.add('is-gone'), 550);
});

document.querySelectorAll('.project').forEach((project) => {
  const key = project.dataset.project;
  const pages = projectPages[key];
  const video = projectVideos[key];
  const total = pages.length + (video ? 1 : 0);
  const slides = project.querySelector('.slides');
  const counter = project.querySelector('.slide-controls b');
  const projectHead = project.querySelector('.project-head');
  let current = 0;

  const previewTitle = project.querySelector('h2').textContent;
  projectHead.insertAdjacentHTML('beforeend', `<div class="project-float" aria-hidden="true"><img src="${projectCovers[key]}" alt="" loading="lazy"></div>`);
  projectHead.querySelector('h2').setAttribute('tabindex', '0');
  projectHead.querySelector('h2').setAttribute('aria-label', `${previewTitle}项目预览`);

  slides.innerHTML = pages.map((page, index) => {
    const title = project.querySelector('h2').textContent;
    return `<figure class="slide${index === 0 ? ' is-active' : ''}"><img src="${page}" alt="${title}项目展板 ${index + 1}" loading="${index === 0 ? 'eager' : 'lazy'}"></figure>`;
  }).join('') + (video ? `<figure class="slide"><video controls playsinline preload="metadata" poster="${projectCovers[key]}" aria-label="${previewTitle}项目视频"><source src="${video.src}" type="${video.type}">${video.fallback ? `<source src="${video.fallback}" type="video/mp4">` : ''}当前浏览器不支持视频播放。</video></figure>` : '');
  counter.textContent = `01 / ${String(total).padStart(2, '0')}`;

  const update = (next) => {
    const slideElements = slides.querySelectorAll('.slide');
    slideElements[current].classList.remove('is-active');
    current = (next + total) % total;
    slideElements[current].classList.add('is-active');
    counter.textContent = `${String(current + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
  };

  project.querySelector('[data-prev]').addEventListener('click', () => update(current - 1));
  project.querySelector('[data-next]').addEventListener('click', () => update(current + 1));
});

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
