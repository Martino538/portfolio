import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../css/index.css';

Swiper.use([Navigation, Pagination, Autoplay]);

document.addEventListener('DOMContentLoaded', () => {
  let caseSlider = new Swiper('.cases-slider', {
    centeredSlides: false,
    slidesPerView: 1.25,
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    initialSlide: 0,
    slidesOffsetBefore: 20,
    autoplay: {
        delay: 10000,
    },
    breakpoints: {
        426: {
            slidesPerView: 1.5,
        },
        769: {
            slidesPerView: 2.5,
        },
        1250: {
            slidesPerView: 3.5,
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
  });

  applyGlowAnimation();
  setInterval(() => {
    applyGlowAnimation();
  }, 10000);

  toggleHamburgerMenu();
  rotateCardOnHover();
  getCurrentYear();
  window.addEventListener('scroll', setNavbarColor);
  window.addEventListener('scroll', changeNavActive);
});

// Hamburger menu
function toggleHamburgerMenu () {
  const hamMenu = document.querySelector('.ham-menu');
  const offScreenMenu = document.querySelector('.nav-content');
  const menuLinks = document.querySelectorAll('.nav-content ul li a');
  const body = document.body;

  hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');

    if (hamMenu.classList.contains('active')) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      hamMenu.classList.remove('active');
      hamMenu.classList.add('closed');
      offScreenMenu.classList.remove('active');
      offScreenMenu.classList.add('closed');
      body.style.overflow = '';
    });
  });
}

// CV card rotation
function rotateCardOnHover () {
  const cardBtn = document.querySelector('.card-btn');
  const cvCard = document.querySelector('.cv-card');

  cardBtn.addEventListener('mouseenter', function () {
    cvCard.style.transform = 'rotate(0deg)';
  });

  cardBtn.addEventListener('mouseleave', function () {
    cvCard.style.transform = 'rotate(-4deg)';
  });
}

// Get footer year
function getCurrentYear () {
  const currentYear = document.querySelector('#currentYear');
  const newYearDate = new Date().getFullYear();

  currentYear.innerHTML = newYearDate;
}

// Set navbar color
function setNavbarColor () {
  const navbar = document.querySelector('header');

  if (window.scrollY > 0) {
    navbar.style.backgroundColor = 'rgba(0, 6, 8, 0.9)';
  } else {
    navbar.style.backgroundColor = 'transparent';
  }
}

function changeNavActive () {
  const navLinks = document.querySelectorAll('.nav-content ul li a');
  let fromTop = window.scrollY;

  navLinks.forEach((link) => {
    let section = document.querySelector(link.hash);

    if (section) {
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add('nav-active');
      } else {
        link.classList.remove('nav-active');
      }
    }
  });
}

const skills = document.querySelectorAll('.skill-image');

function applyGlowAnimation () {
  skills.forEach((skill, index) => {
    setTimeout(() => {
      skill.style.animation = 'glow 1.5s alternate';

      skill.addEventListener('animationend', () => {
        skill.style.animation = 'none';
      });
    }, index * 150);
  });
}
