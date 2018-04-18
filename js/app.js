// Create a map variable
var map;

// Complete the following function to initialize the map
function initMap() {
  // use a constructor to create a new map JS object. You can use the coordinates
  // 42.360083,-71.05888 Boston MA
  map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 42.360083, lng: - 71.05888 },
    zoom: 14
  });
}