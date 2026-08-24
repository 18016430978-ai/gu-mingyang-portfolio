const projects = {
  'yuhuashi-info': {
    page: '07', title: '金陵雨花石录 · 信息图谱', year: '2026', typeZh: '信息可视化', typeEn: 'INFOGRAPHIC DESIGN', cover: 'assets/covers-web/yuhuashi-info.webp', pages: ['assets/works-web/yuhuashi-info/01.webp','assets/works-web/yuhuashi-info/02.webp','assets/works-web/yuhuashi-info/03.webp','assets/works-web/yuhuashi-info/04.webp'],
    deck: '以南京雨花石为研究对象，将宏观形态、剖面结构与色彩量化为可阅读、可比较的信息图谱。',
    concept: '项目以“采集—辨识—分类—再叙述”为线索，结合地质分类、纹样特征与 CIELAB 色彩数据，建立雨花石的多维视觉档案。',
    requirements: '设计需要同时承载科学信息与地方文化，在保证数据准确的基础上，让不同尺寸、颜色、纹理和产地之间形成清晰的比较关系。',
    output: '最终形成研究档案、分类图谱、信息图表与系列应用，通过统一版式连接完整的调研、分析与可视化过程。',
    claim: '纹理、时间与地域，共同构成一套可以被阅读的自然语言。'
  },
  'yuhuashi-installation': {
    page: '08', title: '金陵雨花石录 · 交互装置', year: '2026', typeZh: '交互装置', typeEn: 'INTERACTIVE INSTALLATION', cover: 'assets/covers-web/yuhuashi-installation.webp', pages: ['assets/works-web/yuhuashi-installation/01.webp','assets/works-web/yuhuashi-installation/02.webp','assets/works-web/yuhuashi-installation/03.webp','assets/works-web/yuhuashi-installation/04.webp'], video: 'assets/videos/yuhuashi-installation-web.webm', videoType: 'video/webm',
    deck: '将雨花石的矿物色彩与剖面纹样转化为可触摸、可选择、可实时反馈的 Mapping 交互体验。',
    concept: '参与者选择雨花石并按压感应区域，装置读取石材类型、触摸压力与持续时间，生成动态波纹和对应色彩，使隐藏的地质信息通过光影被感知。',
    requirements: '交互需要连接矿石样本、压力传感器、Arduino、TouchDesigner 与投影系统，同时保持操作路径直观、反馈及时且具有沉浸感。',
    output: '完成交互逻辑、硬件搭建、视觉映射、参数测试与装置呈现，形成从“选择—触摸—转译—回应”的完整体验。',
    claim: '当手触碰石头，亿万年的地质信息被重新点亮。'
  },
  nature: {
    page: '09', title: '自然色差', year: '2026', typeZh: '数据可视化', typeEn: 'DATA VISUALIZATION', cover: 'assets/covers-web/nature.webp', pages: ['assets/works-web/nature/01.webp','assets/works-web/nature/02.webp','assets/works-web/nature/03.webp','assets/works-web/nature/04.webp','assets/works-web/nature/05.webp','assets/works-web/nature/06.webp'], video: 'assets/videos/nature-web.webm', videoType: 'video/webm',
    deck: '从自然环境中的色彩差异出发，将观察、采样与数据转化为一套兼具分析性与感知性的视觉研究。',
    concept: '色彩既是视觉现象，也是环境变化留下的证据。项目以连续采样和对照关系呈现颜色在时间、地点与媒介中的偏移。',
    requirements: '需要建立可复用的数据编码方式，同时保留自然色彩的细微感受，避免图表语言压缩掉观察本身的丰富性。',
    output: '输出包括色彩档案、数据图谱、动态视觉规则与完整展示系统。',
    claim: '所谓色差不是误差，而是自然在不同条件下留下的可见变化。'
  },
  tongqu: {
    page: '10', title: '瞳趣', year: '2026', typeZh: '产品体验设计', typeEn: 'UX / UI DESIGN', cover: 'assets/covers-web/tongqu.webp', pages: ['assets/works-web/tongqu/01.webp','assets/works-web/tongqu/02.webp','assets/works-web/tongqu/03.webp','assets/works-web/tongqu/04.webp','assets/works-web/tongqu/05.webp'], video: 'assets/videos/tongqu-web.webm', videoType: 'video/webm',
    deck: '围绕儿童视觉健康与参与式学习构建数字体验，以轻量任务、反馈机制和清晰的信息层级降低使用门槛。',
    concept: '将视觉训练从被动检查转化为可理解、可参与的日常体验，让儿童、家长与专业人员共享同一套信息语言。',
    requirements: '界面需要兼顾儿童的操作直觉、家长的信息判断与专业数据的可靠呈现，并控制视觉刺激强度。',
    output: '完成用户研究、信息架构、交互原型、界面系统与关键任务流程。',
    claim: '好的健康体验不是增加提醒，而是让正确的行为自然发生。'
  },
  coffee: {
    page: '11', title: '上海牌咖啡', year: '2025', typeZh: '品牌视觉', typeEn: 'VISUAL IDENTITY', cover: 'assets/covers-web/coffee.webp', pages: ['assets/works-web/coffee/01.webp','assets/works-web/coffee/02.webp','assets/works-web/coffee/03.webp','assets/works-web/coffee/04.webp','assets/works-web/coffee/05.webp'],
    deck: '从上海城市记忆与咖啡文化出发，建立兼具历史气质和当代秩序的品牌视觉系统。',
    concept: '项目把城市档案中的字体、建筑节奏与消费文化转化为品牌识别，让怀旧不止停留在表面装饰。',
    requirements: '视觉需要覆盖包装、海报、空间与数字传播，同时在不同媒介中保持明确的品牌识别。',
    output: '完成标志、字体层级、色彩系统、包装与系列传播应用。',
    claim: '城市记忆不是复古滤镜，而是一套仍然能够被重新使用的视觉语法。'
  },
  tangsancai: {
    page: '12', title: '唐三彩 · 文旅网页设计', year: '2026', typeZh: '网页设计', typeEn: 'WEB DESIGN', cover: 'assets/covers-web/tangsancai.webp', pages: ['assets/works-web/tangsancai/01.webp','assets/works-web/tangsancai/02.webp','assets/works-web/tangsancai/03.webp'],
    deck: '以陕西唐三彩为文化对象，构建兼具文物知识、数字导览与视觉叙事的文旅网页体验。',
    concept: '以釉色、器型与历史脉络为信息线索，将唐三彩的文化内容转化为可浏览、可检索、可持续延展的数字档案。',
    requirements: '网页需要兼顾文化信息的准确性、长页面阅读节奏与多端浏览效率，并通过统一组件保持视觉识别。',
    output: '完成信息架构、网页视觉系统、核心页面设计与响应式展示方案。',
    claim: '让传统文物从静态展柜进入可探索的数字叙事。'
  },
  space: {
    page: '13', title: '魔方筑境', year: '2025', typeZh: '空间设计', typeEn: 'SPATIAL DESIGN', cover: 'assets/covers-web/space.webp', pages: ['assets/works-web/space/01.webp','assets/works-web/space/02.webp'],
    deck: '以模块化空间作为情绪调节的媒介，通过路径、尺度、光线与触觉建立可参与的疗愈体验。',
    concept: '魔方的旋转与组合成为空间组织方法，让使用者通过主动选择重新感知身体、距离和情绪。',
    requirements: '空间需要可快速组合、适应不同场地，同时在开放与私密之间提供清晰的层次变化。',
    output: '形成空间叙事、模块结构、材料规范与关键体验场景。',
    claim: '空间不仅容纳行为，也可以帮助情绪找到新的位置。'
  },
  dopamine: {
    page: '14', title: '不打不打 · 多巴胺行动', year: '2024', typeZh: '视觉传播', typeEn: 'POSTER / CAMPAIGN', cover: 'assets/covers-web/dopamine.webp', pages: ['assets/works-web/dopamine/01.webp','assets/works-web/dopamine/02.webp'],
    deck: '以高能色彩与直接语句构成反暴力传播行动，将情绪表达转化为公众可参与的视觉事件。',
    concept: '项目利用“多巴胺”式视觉语言吸引注意，再通过反差文案把观看引向对暴力行为的讨论。',
    requirements: '传播需要在公共空间中快速识别，同时避免用过度刺激的图像再次制造伤害。',
    output: '完成系列海报、传播口号、动态规则与公共场景应用。',
    claim: '鲜艳不意味着轻浮，它也可以成为拒绝暴力的公共信号。'
  },
  appetite: {
    page: '15', title: '食欲补丁', year: '2024', typeZh: '概念视觉', typeEn: 'VISUAL CONCEPT', cover: 'assets/covers-web/appetite.webp', pages: ['assets/works-web/appetite/01.webp','assets/works-web/appetite/02.webp'],
    deck: '讨论数字媒介如何重塑食欲与消费判断，以“补丁”作为界面、身体和欲望之间的视觉隐喻。',
    concept: '把食物图像、系统提示与身体感受并置，呈现平台算法如何持续修补并放大人的消费欲望。',
    requirements: '作品需要保持批判性，同时让复杂议题通过简洁、直接的视觉符号被理解。',
    output: '完成概念视觉、界面实验、海报与叙事展示。',
    claim: '当欲望像软件一样不断更新，我们需要重新判断什么是真正的需要。'
  },
  cpus: {
    page: '16', title: 'CPUS', year: '2025', typeZh: '文化海报', typeEn: 'CULTURAL POSTER', cover: 'assets/covers-web/cpus.webp', pages: ['assets/works-web/cpus/01.webp','assets/works-web/cpus/02.webp'],
    deck: '通过字体、网格与符号实验构建文化活动视觉，将理性的信息秩序与高密度图形表达结合。',
    concept: 'CPU 的并行运算被转译为多层信息同时发生的版式结构，形成具有技术感的文化传播语言。',
    requirements: '系统需要适配不同尺寸与传播媒介，并在高信息密度下保持标题和行动信息的清晰。',
    output: '完成主视觉、系列海报、动态延展与应用规范。',
    claim: '信息可以并行发生，但设计必须决定观看的顺序。'
  }
};

const order = Object.keys(projects);
const params = new URLSearchParams(window.location.search);
const id = projects[params.get('id')] ? params.get('id') : order[0];
const project = projects[id];
const asset = (path) => path;

document.title = `${project.title} — 顾明泱作品集`;
document.querySelector('[data-title]').textContent = project.title;
document.querySelector('[data-deck]').textContent = project.deck;
document.querySelector('[data-type]').innerHTML = `${project.typeZh}<small>${project.typeEn}</small>`;
document.querySelector('[data-year]').textContent = `/${project.year.slice(-2)}`;
document.querySelector('[data-concept]').textContent = project.concept;
document.querySelector('[data-requirements]').textContent = project.requirements;
document.querySelector('[data-output]').textContent = project.output;
document.querySelector('.page-code span').textContent = `/${project.page}`;
document.querySelector('.page-code b').textContent = project.title;

const hero = document.querySelector('[data-hero]');
hero.src = project.cover;
hero.alt = `${project.title}项目主视觉`;
hero.loading = 'eager';
hero.fetchPriority = 'high';
hero.decoding = 'async';
const pageStack = document.querySelector('.page-stack-inner');
pageStack.innerHTML = project.pages.map((page, index) => (
  `<figure class="page-board"><img src="${asset(page)}" alt="${project.title}项目展板 ${index + 1}" ${index === 0 ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"'} decoding="async"></figure>`
)).join('') + (project.video ? (
  `<figure class="page-board page-video"><video controls playsinline preload="none" poster="${project.cover}" aria-label="${project.title}项目视频"><source src="${project.video}" type="${project.videoType || 'video/mp4'}">${project.videoFallback ? `<source src="${project.videoFallback}" type="video/mp4">` : ''}当前浏览器不支持视频播放。</video><figcaption>项目影像 / PROJECT FILM</figcaption></figure>`
) : '');

const currentIndex = order.indexOf(id);
const prevId = order[(currentIndex - 1 + order.length) % order.length];
const nextId = order[(currentIndex + 1) % order.length];
const prevLink = document.querySelector('[data-prev]');
const nextLink = document.querySelector('[data-next]');
prevLink.href = `project.html?id=${prevId}`;
nextLink.href = `project.html?id=${nextId}`;
prevLink.querySelector('strong').textContent = projects[prevId].title;
nextLink.querySelector('strong').textContent = projects[nextId].title;

const loader = document.querySelector('.loader');
const menuTrigger = document.querySelector('.menu-trigger');
const menuPanel = document.querySelector('.menu-panel');
const gridTrigger = document.querySelector('.grid-trigger');
const gridOverlay = document.querySelector('.grid-overlay');
window.addEventListener('load', () => window.setTimeout(() => loader.classList.add('is-gone'), 450));

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
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setMenu(false); });
