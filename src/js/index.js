import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../css/index.css';

Swiper.use([Navigation, Pagination, Autoplay]);

document.addEventListener('DOMContentLoaded', () => {
  // =========================
  // Swiper voor cases slider
  // =========================
  let caseSlider = new Swiper('.cases-slider', {
    centeredSlides: false,
    slidesPerView: 1.25,
    spaceBetween: 20,
    grabCursor: true,
    initialSlide: 0,
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 20,
    autoplay: {
      delay: 10000,
    },
    breakpoints: {
      426: { slidesPerView: 1.5 },
      769: { slidesPerView: 2.5 },
      1250: { slidesPerView: 3.5 },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // =========================
  // Glow animatie skills
  // =========================
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

  applyGlowAnimation();
  setInterval(applyGlowAnimation, 10000);

  // =========================
  // Hamburger menu
  // =========================
  function toggleHamburgerMenu () {
    const hamMenu = document.querySelector('.ham-menu');
    const offScreenMenu = document.querySelector('.nav-content');
    const menuLinks = document.querySelectorAll('.nav-content ul li a');
    const body = document.body;

    if (!hamMenu || !offScreenMenu) return;

    hamMenu.addEventListener('click', () => {
      hamMenu.classList.toggle('active');
      offScreenMenu.classList.toggle('active');

      body.style.overflow = hamMenu.classList.contains('active') ? 'hidden' : '';
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
  toggleHamburgerMenu();

  // =========================
  // CV Card rotation
  // =========================
  function rotateCardOnHover () {
    const cardBtn = document.querySelector('.card-btn');
    const cvCard = document.querySelector('.cv-card');
    if (!cardBtn || !cvCard) return;

    cardBtn.addEventListener('mouseenter', () => {
      cvCard.style.transform = 'rotate(0deg)';
    });

    cardBtn.addEventListener('mouseleave', () => {
      cvCard.style.transform = 'rotate(-4deg)';
    });
  }
  rotateCardOnHover();

  // =========================
  // Footer jaar
  // =========================
  function getCurrentYear () {
    const currentYear = document.querySelector('#currentYear');
    if (!currentYear) return;
    currentYear.innerHTML = new Date().getFullYear();
  }
  getCurrentYear();

  // =========================
  // Navbar kleur + active link
  // =========================
  function setNavbarColor () {
    const navbar = document.querySelector('header');
    if (!navbar) return;

    navbar.style.backgroundColor = window.scrollY > 0 ? 'rgba(0, 6, 8, 0.9)' : 'transparent';
  }

  function changeNavActive () {
    const navLinks = document.querySelectorAll('.nav-content ul li a');
    let fromTop = window.scrollY;

    let foundActive = false;

    navLinks.forEach((link) => {
      const section = document.querySelector(link.hash);
      if (section) {
        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
          link.classList.add('nav-active');
          foundActive = true;
        } else {
          link.classList.remove('nav-active');
        }
      } else {
        link.classList.remove('nav-active'); // link naar een sectie die niet bestaat
      }

      if (!foundActive) {
        const projectLink = document.querySelector('a[href*="#cases"], a[href*="/#cases"]');
        if (projectLink) projectLink.classList.add('nav-active');
      }
    });
  }

  window.addEventListener('scroll', setNavbarColor);
  window.addEventListener('scroll', changeNavActive);
  setNavbarColor(); // initial check
  changeNavActive(); // initial check

  // =========================
  // Smooth scroll voor hash links
  // =========================
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
});
