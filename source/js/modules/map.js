const initMap = () => {
  const map = document.querySelector('#map');

  if (map) {
    const bpDesktop = window.matchMedia(`(min-width: 1024px)`); // eslint-disable-line
    const bpTablet = window.matchMedia(`(max-width: 1023px) and (min-width: 768px)`); // eslint-disable-line
    const bpMobile = window.matchMedia(`(max-width: 767px)`); // eslint-disable-line

    if (bpDesktop.matches) {
      map.style.width = '52.84%';
    } else if (bpTablet.matches) {
      map.style.width = '47%';
    } else if (bpMobile.matches) {
      map.style.width = '';
    }

    bpDesktop.addListener(() => {
      if (bpDesktop.matches) {
        map.style.width = '52.84%';
      }
    });

    bpTablet.addListener(() => {
      if (bpTablet.matches) {
        map.style.width = '47%';
      }
    });

    bpMobile.addListener(() => {
      if (bpMobile.matches) {
        map.style.width = '';
      }
    });
  }
};

export {initMap};
