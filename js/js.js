ymaps.ready(init);
var myMap,
    myPlacemark1;

function init(){     
    myMap = new ymaps.Map("map", {
        center: [53.92827507, 27.60050350],
        zoom: 17
    });

myMap.controls
        .remove('rulerControl')
        .remove('searchControl')
        .remove('zoomControl')
        .remove('trafficControl')
        .remove('typeSelector')
        .remove('typeSelector')
        .remove('geolocationControl')
        .remove('routeEditor')
        .remove('fullscreenControl')
        .remove('routeButtonControl')
        .remove('routePanelControl')

    myMap.behaviors.disable([
      'scrollZoom'
      ]);


    myPin = new ymaps.GeoObjectCollection({}, {
          iconLayout: 'default#image',
          iconImageHref: 'img/location.png',
          iconImageSize: [42, 42],
          iconImageOffset: [-20, -40]
        });

  myPlacemark1 = new ymaps.Placemark([53.92827507, 27.60050350], {
    balloonContentHeader: 'ИП Яцковец В.Л.',
    balloonContentBody: 'Чернышевского 10а, офис 704',
    hintContent: 'Чернышевского 10а, офис 704'
  });

  myPin.add(myPlacemark1);
  myMap.geoObjects.add(myPin);
}



      
