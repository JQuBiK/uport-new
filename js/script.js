$('.main-slider').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
});

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [45.048237714814626,41.91308094907376],
            zoom: 18
        }, {
            searchControlProvider: 'yandex#search'
        });
  
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: '',
            balloonContent: 'Ставрополь, улица Дзержинского, 114 '
        }, 
        {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            // iconImageHref: '/design/img/map-point.svg',
            // Размеры метки.
            iconImageSize: [42, 55],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-21, -55]
        });
  
    myMap.geoObjects.add(myPlacemark);
  });