import smoothscroll from '../vendor/smoothscroll';

const mainHeader = document.querySelector('.main-header');
const navButton = mainHeader.querySelector('.nav-toggle');
const mainNav = mainHeader.querySelector('.main-nav');
const innerHeaderWrapper = mainHeader.querySelector('.main-header__mobile-wrapper');

smoothscroll.polyfill();

mainHeader.classList.remove('no-js');
let isMenuOpened = false;

const initMainNav = () => {
  navButton.addEventListener('click', (evt) => {
    return isMenuOpened ? getMenuClosed(evt) : getMenuOpened(evt);
  });

  if (window.matchMedia(`(max-width: 767px)`).matches) {// eslint-disable-line
    mainNav.addEventListener('focusout', (evt) => {
      if (!evt.relatedTarget || !evt.relatedTarget.closest('.main-nav')) {
        getMenuClosed();
      }
    });
  }

  const navLinkList = document.querySelectorAll('.main-nav__link, .main-footer__nav-link');
  navLinkList.forEach((navLink) => {
    navLink.addEventListener('click', onNavLinkClicked);
  });
};

const getMenuOpened = () => {
  mainNav.classList.add('active');
  innerHeaderWrapper.classList.add('active');
  navButton.classList.add('active');
  document.body.classList.add('scroll-lock');
  mainNav.addEventListener('click', getCloseOverlay);
  isMenuOpened = true;
};

const getMenuClosed = () => {
  mainNav.classList.remove('active');
  innerHeaderWrapper.classList.remove('active');
  navButton.classList.remove('active');
  document.body.classList.remove('scroll-lock');
  mainNav.removeEventListener('click', getCloseOverlay);
  isMenuOpened = false;
};

const getCloseOverlay = (evt) => {
  const target = evt.target;
  if (target.closest('.main-nav__overlay')) {
    getMenuClosed();
  }
};

const onNavLinkClicked = (evt) => {
  evt.preventDefault();
  const section = evt.target.hash.length ? document.querySelector(evt.target.hash) : '';
  if (section) {
    window.scrollTo({top: section.offsetTop, left: 0, behavior: 'smooth'});

    if (!evt.target.closest('.main-footer') && window.matchMedia(`(max-width: 767px)`).matches) {// eslint-disable-line
      getMenuClosed();
    }
  }
};

export {initMainNav};
