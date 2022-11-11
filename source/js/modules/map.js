ymaps.ready(function () { // eslint-disable-line
  let myMap;
  myMap = new ymaps.Map('map', {// eslint-disable-line
    center: [59.938635, 30.323118],
    zoom: 17,
    type: 'yandex#map',
    controls: ['smallMapDefaultSet'],
  }, {
    searchControlProvider: 'yandex#search',
  });

  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(// eslint-disable-line
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  );

  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {// eslint-disable-line
    hintContent: 'г. Санкт Петербург, ул. Большая Конюшенная, 19/8',
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../img/svg/map-pin.svg',
    iconImageSize: [18, 22],
    iconImageOffset: [-9, -22],
  });

  myMap.geoObjects
      .add(myPlacemark);// eslint-disable-line
});
