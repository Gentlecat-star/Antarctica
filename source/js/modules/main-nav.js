const mainHeader = document.querySelector('.main-header');
const navButton = mainHeader.querySelector('.nav-toggle');
const mainNav = mainHeader.querySelector('.main-nav');
const innerHeaderWrapper = mainHeader.querySelector('.main-header__mobile-wrapper');

mainHeader.classList.remove('no-js');

const initMainNav = () => {
  let isMenuOpened = false;

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

  navButton.addEventListener('click', (evt) => {
    return isMenuOpened ? getMenuClosed(evt) : getMenuOpened(evt);
  });

  if (window.matchMedia(`(max-width: 767px)`).matches) {
    mainNav.addEventListener('focusout', (evt) => {
      if (!evt.relatedTarget || !evt.relatedTarget.closest('.main-nav')) {
        getMenuClosed();
      }
    });
}
};

export {initMainNav};
