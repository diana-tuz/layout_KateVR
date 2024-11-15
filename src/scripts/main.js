'use strict';

const translations = {
  en: {
    navAbout: 'About',
    navTech: 'Tech',
    navBenefits: 'Benefits',
    navContact: 'Contact',
    buttonByu: 'Byu Now',
    h1White: 'THE NEW START OF',
    h1Blue: 'VR LOCOMOTION',
    heroDescription:
      'Discover the most comprehensive VR Locomotion system, and unlock infinite motion in any games on any platforms!',
    heroButtonPlay: 'Play Video',
    aboutButtonPlay: 'Play Video',
    heroFaq: 'FAQ',
    heroHelp: 'Help',
    buttonPrev: 'Previous',
    buttonNext: 'Next',
    aboutButtonPrev: 'Previous',
    aboutButtonNext: 'Next',
    more: 'More',
    info2: 'MORE THAN',
    info2Blue: ' GAMING!',
    infoSubtitle: 'This also made for people who are interested in...',
    educationTitle: 'EDUCATION',
    educationSubtitle:
      'Create aducational simulations, trainings and much more with unlimited virtual space and minimum physical space',
    realEstateTitle: 'REAL ESTATE',
    realEstateSubtitle:
      'Desighn architectural projects in a deeply realistic environment allowing visitors to freely walk around, and feel their vibe',
    fitnesTitle: 'FITNESS',
    fitnesSubtitle:
      'Combine business with pleasure, and discover countless ways to stay fit while playing your favorite VR Games!',
    socialInteractionsTitle: 'SOCIAL INTERACTIONS',
    socialInteractionsSubtitle:
      'Hang out with your friends in the virtual world when you can’t meet space requirements',
    whyh2: 'WHY',
    whyh2Blue: 'KAT LOCO?',
    universallyTitle: 'UNIVERSALLY COMPATIBLE',
    universallySubtitle:
      'KAT Loco offers universal compatibility across all major VR headsets and platforms allowing you to play any VR game with support for Free Locomotion',
    controlTitle: 'VR/PC CONTROL PANEL',
    controlSubtitle:
      'Our Multifunctional Software allows for quick access to KAT Loco’s control panel both from a computer desktop, and directly from your VR headset.',
    virelessTitle: 'WIRELESS SENSORS',
    virelessSubtitle:
      'What makes it even more advanced, KAT Loco is entirely wireless, and comes with a complete system of algorithms, super durable batteries and more!',
    aboutTite: 'ABOUT',
    aboutTiteBlue: 'PRODUCT',
    aboutSubtitle:
      'KAT loco is a foot-based VR locomotion system that gives complete physical control over lower-body actions, allowing you to freely walk, run, and carry out just any other movement in virtual reality.',
  },
  ua: {
    aboutTite: 'ПРО',
    aboutTiteBlue: 'ПРОДУКТ',
    aboutSubtitle:
      'KAT loco — це ножна VR-система пересування, яка забезпечує повний фізичний контроль над діями нижньої частини тіла, дозволяючи вам вільно ходити, бігати та виконувати будь-які інші рухи у віртуальній реальності.',
    virelessTitle: 'БЕЗДРОТОВІ ДАТЧИКИ',
    virelessSubtitle:
      'Що робить його ще більш досконалим, KAT Loco є повністю бездротовим і постачається з повною системою алгоритмів, надміцними батареями та іншим!',
    controlTitle: 'ПАНЕЛЬ КЕРУВАННЯ VR/ПК',
    controlSubtitle:
      'Наше багатофункціональне програмне забезпечення забезпечує швидкий доступ до панелі керування KAT Loco як із робочого столу комп’ютера, так і безпосередньо з гарнітури VR.',
    navAbout: 'Про нас',
    navTech: 'Характеристики',
    navBenefits: 'Переваги',
    navContact: 'Котакти',
    buttonByu: 'Придбати',
    h1White: 'НОВИЙ ПОЧАТОК',
    h1Blue: 'VR LOCOMOTION',
    heroDescription:
      'Відкрийте для себе найповнішу систему VR Locomotion і розблокуйте нескінченний рух у будь-яких іграх на будь-якій платформі!',
    heroButtonPlay: 'Відтворити',
    aboutButtonPlay: 'Відтворити',
    heroFaq: 'FAQ',
    heroHelp: ' Допомога',
    buttonPrev: 'Попередній',
    buttonNext: 'Наступний',
    aboutButtonPrev: 'Попередній',
    aboutButtonNext: 'Наступний',
    more: 'Більше',
    info2: 'БІЛЬШЕ, НІЖ',
    info2Blue: ' ІГРИ!',
    infoSubtitle: 'Це також призначено для людей, які цікавляться...',
    educationTitle: 'ОСВІТА',
    educationSubtitle:
      'Створюйте навчальні симуляції, тренінги та багато іншого з необмеженим віртуальним простором і мінімальним фізичним простором',
    realEstateTitle: 'НЕРУХОМІСТЬ',
    realEstateSubtitle:
      'Розробляйте архітектурні проекти в глибоко реалістичному середовищі, дозволяючи відвідувачам вільно ходити та відчувати їхню атмосферу',
    fitnesTitle: 'ФІТНЕС',
    fitnesSubtitle:
      'Поєднайте приємне з бізнесом і відкрийте незліченну кількість способів залишатися у формі, граючи в улюблені VR-ігри!',
    socialInteractionsTitle: 'СОЦІАЛЬНІ ВЗАЄМОДІЇ',
    socialInteractionsSubtitle:
      'Спілкуйтеся з друзями у віртуальному світі, коли вам не вистачає місця',
    whyh2: 'ЧОМУ',
    whyh2Blue: 'KAT LOCO?',

    universallyTitle: 'УНІВЕРСАЛЬНА СУМІСНІСТЬ',
    universallySubtitle:
      'KAT Loco пропонує універсальну сумісність з усіма основними гарнітурами та платформами VR, дозволяючи вам грати в будь-яку VR-ігру з підтримкою Free Locomotion',
  },
};

function changeLanguage(lang) {
  const elements = Object.keys(translations[lang]);
  elements.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = translations[lang][id];
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  changeLanguage('en');
});

const images = ['../../images/hero.png', './images/videoPreview.png'];
let imageIndex = 0;

function showNextImage() {
  document.getElementById('slider').style = 'transform: translate(0%)';
  document.getElementById('buttonNext').classList.remove('buttonActive');
  document.getElementById('buttonPrev').classList.add('buttonActive');
}

function showPrevImage() {
  document.getElementById('slider').style = 'transform: translate(-100%)';
  document.getElementById('buttonPrev').classList.remove('buttonActive');
  document.getElementById('buttonNext').classList.add('buttonActive');
}
function showAboutNextImage() {
  document.getElementById('sliderAbout').style = 'transform: translate(0%)';
  document.getElementById('aboutButtonNext').classList.remove('buttonActive');
  document.getElementById('aboutButtonPrev').classList.add('buttonActive');
}

function showAboutPrevImage() {
  document.getElementById('sliderAbout').style = 'transform: translate(-100%)';
  document.getElementById('aboutButtonPrev').classList.remove('buttonActive');
  document.getElementById('aboutButtonNext').classList.add('buttonActive');
}
