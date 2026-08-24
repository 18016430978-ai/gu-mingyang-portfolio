const projectPages = {
  'yuhuashi-info': ['assets/works-web/yuhuashi-info/01.webp', 'assets/works-web/yuhuashi-info/02.webp', 'assets/works-web/yuhuashi-info/03.webp', 'assets/works-web/yuhuashi-info/04.webp'],
  'yuhuashi-installation': ['assets/works-web/yuhuashi-installation/01.webp', 'assets/works-web/yuhuashi-installation/02.webp', 'assets/works-web/yuhuashi-installation/03.webp', 'assets/works-web/yuhuashi-installation/04.webp'],
  nature: ['assets/works-web/nature/01.webp', 'assets/works-web/nature/02.webp', 'assets/works-web/nature/03.webp', 'assets/works-web/nature/04.webp', 'assets/works-web/nature/05.webp', 'assets/works-web/nature/06.webp'],
  tongqu: ['assets/works-web/tongqu/01.webp', 'assets/works-web/tongqu/02.webp', 'assets/works-web/tongqu/03.webp', 'assets/works-web/tongqu/04.webp', 'assets/works-web/tongqu/05.webp'],
  coffee: ['assets/works-web/coffee/01.webp', 'assets/works-web/coffee/02.webp', 'assets/works-web/coffee/03.webp', 'assets/works-web/coffee/04.webp', 'assets/works-web/coffee/05.webp'],
  tangsancai: ['assets/works-web/tangsancai/01.webp', 'assets/works-web/tangsancai/02.webp', 'assets/works-web/tangsancai/03.webp'],
  space: ['assets/works-web/space/01.webp', 'assets/works-web/space/02.webp'],
  dopamine: ['assets/works-web/dopamine/01.webp', 'assets/works-web/dopamine/02.webp'],
  appetite: ['assets/works-web/appetite/01.webp', 'assets/works-web/appetite/02.webp'],
  cpus: ['assets/works-web/cpus/01.webp', 'assets/works-web/cpus/02.webp'],
};

const projectCovers = {
  'yuhuashi-info': 'assets/covers-web/yuhuashi-info.webp',
  'yuhuashi-installation': 'assets/covers-web/yuhuashi-installation.webp',
  nature: 'assets/covers-web/nature.webp',
  tongqu: 'assets/covers-web/tongqu.webp',
  coffee: 'assets/covers-web/coffee.webp',
  tangsancai: 'assets/covers-web/tangsancai.webp',
  space: 'assets/covers-web/space.webp',
  dopamine: 'assets/covers-web/dopamine.webp',
  appetite: 'assets/covers-web/appetite.webp',
  cpus: 'assets/covers-web/cpus.webp',
};

const projectVideos = {
  'yuhuashi-installation': { src: 'assets/videos/yuhuashi-installation-web.webm', type: 'video/webm' },
  nature: { src: 'assets/videos/nature-web.webm', type: 'video/webm' },
  tongqu: { src: 'assets/videos/tongqu-web.webm', type: 'video/webm' },
};

const loader = document.querySelector('.loader');
const gridTrigger = document.querySelector('.grid-trigger');
const gridOverlay = document.querySelector('.grid-overlay');
const menuTrigger = document.querySelector('.menu-trigger');
const menuPanel = document.querySelector('.menu-panel');

const dismissLoader = () => {
  window.setTimeout(() => loader.classList.add('is-gone'), 550);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', dismissLoader, { once: true });
} else {
  dismissLoader();
}

window.addEventListener('load', () => loader.classList.add('is-gone'), { once: true });

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
  projectHead.insertAdjacentHTML('beforeend', `<div class="project-float" aria-hidden="true"><img src="${projectCovers[key]}" alt="" loading="lazy" decoding="async"></div>`);
  projectHead.querySelector('h2').setAttribute('tabindex', '0');
  projectHead.querySelector('h2').setAttribute('aria-label', `${previewTitle}项目预览`);

  slides.innerHTML = pages.map((page, index) => {
    const title = project.querySelector('h2').textContent;
    return `<figure class="slide${index === 0 ? ' is-active' : ''}"><img src="${page}" alt="${title}项目展板 ${index + 1}" loading="lazy" decoding="async"></figure>`;
  }).join('') + (video ? `<figure class="slide slide-video"><video controls playsinline preload="none" poster="${projectCovers[key]}" aria-label="${previewTitle}项目视频"><source src="${video.src}" type="${video.type}">${video.fallback ? `<source src="${video.fallback}" type="video/mp4">` : ''}当前浏览器不支持视频播放。</video><button class="video-play" type="button" aria-label="播放${previewTitle}项目视频"><i aria-hidden="true">▶</i><span>播放视频 / PLAY</span></button></figure>` : '');
  counter.textContent = `01 / ${String(total).padStart(2, '0')}`;

  const media = slides.querySelector('video');
  const playTrigger = slides.querySelector('.video-play');

  if (media && playTrigger) {
    const showPlayTrigger = () => playTrigger.classList.remove('is-hidden');
    const hidePlayTrigger = () => playTrigger.classList.add('is-hidden');

    playTrigger.addEventListener('click', async () => {
      if (media.readyState === HTMLMediaElement.HAVE_NOTHING) {
        media.preload = 'metadata';
        media.load();
      }

      try {
        await media.play();
      } catch (error) {
        showPlayTrigger();
      }
    });

    media.addEventListener('play', hidePlayTrigger);
    media.addEventListener('ended', showPlayTrigger);
  }

  const update = (next) => {
    const slideElements = slides.querySelectorAll('.slide');
    const outgoingVideo = slideElements[current].querySelector('video');
    if (outgoingVideo) outgoingVideo.pause();
    slideElements[current].classList.remove('is-active');
    current = (next + total) % total;
    slideElements[current].classList.add('is-active');
    counter.textContent = `${String(current + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;

    const activeVideo = slideElements[current].querySelector('video');
    if (activeVideo && activeVideo.readyState === HTMLMediaElement.HAVE_NOTHING) {
      activeVideo.preload = 'metadata';
      activeVideo.load();
    }
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
