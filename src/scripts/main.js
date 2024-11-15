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
    heroFaq: 'FAQ',
    heroHelp: 'Help',
    buttonPrev: 'Previous',
    buttonNext: 'Next',
    more: 'More',
  },
  ua: {
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
    heroFaq: 'FAQ',
    heroHelp: ' Допомога',
    buttonPrev: 'Попередній',
    buttonNext: 'Наступний',
    more: 'Більше',
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
