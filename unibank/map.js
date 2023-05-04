function initMap() {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: { lat: 40.4093, lng: 49.8671 },
        zoom: 12
    });
  }
  google.maps.event.addDomListener(window, 'load', initMap);