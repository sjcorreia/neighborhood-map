// Create a map variable
var map;

// Create a new blank array for all the listing markers.
var markers = [];

// These are the real estate listings that will be shown to the user.
// Normally we'd have these in a database instead.
var locations = [{
    title: 'The Paul Revere House',
    location: {
      lat: 42.363738,
      lng: -71.0537
    },
    place_id: 'ChIJtT5ZHIlw44kRzCtDBAjPP3A',
    keyword: 'Paul Revere',
    category: 'History'
  },
  {
    title: 'Faneuil Hall Marketplace',
    location: {
      lat: 42.360229,
      lng: -71.054772
    },
    place_id: 'ChIJpyiwa4Zw44kRBQSGWKv4wgA',
    keyword: 'Faneuil Hall',
    category: 'History'
  },
  {
    title: 'Site of the Boston Tea Party',
    location: {
      lat: 42.352179,
      lng: -71.05128
    },
    place_id: 'ChIJ4bwEPIBw44kRs7STmn977tE',
    keyword: 'Boston Tea Party',
    category: 'History'
  },
  {
    title: 'Fenway Park',
    location: {
      lat: 42.346676,
      lng: -71.097218
    },
    place_id: 'ChIJbz8lP_Z544kRBFV6ZMsNgKI',
    keyword: 'Fenway Park',
    category: 'Sports'
  },
  {
    title: 'Bull & Finch Pub',
    location: {
      lat: 42.355923,
      lng: -71.071278
    },
    place_id: 'ChIJB939tp9w44kRQuO7SeU0ML4',
    keyword: 'Cheers',
    category: 'Food & Drink'
  },
  {
    title: 'Boston Symphony Hall',
    location: {
      lat: 42.342821,
      lng: -71.08573
    },
    place_id: 'ChIJCV1qVRd644kRkF8_glHk7wo',
    keyword: 'Boston Pops Orchestra',
    category: 'Music & Arts'
  },
  {
    title: 'USS Constitution Museum',
    location: {
      lat: 42.37398,
      lng: -71.055424
    },
    place_id: 'ChIJOU-Kd_Rw44kRpQxHRXAFwqU',
    keyword: 'USS Constitution',
    category: 'History'
  },
  {
    title: 'Tasty Burger',
    location: {
      lat: 42.344762,
      lng: -71.098375
    },
    place_id: 'ChIJG_7Z4_V544kRalvwsGSoZaI',
    keyword: 'Pulp Fiction',
    category: 'Food & Drink'
  },
  {
    title: 'Museum of Fine Arts',
    location: {
      lat: 42.339381,
      lng: -71.094048
    },
    place_id: 'ChIJS3rn5w1644kRZNWVxNY_Ay8',
    keyword: 'Museum of Fine Arts, Boston',
    category: 'Music & Arts'
  },
  {
    title: 'TD Garden',
    location: {
      lat: 42.36631,
      lng: -71.062226
    },
    place_id: 'ChIJM3Ri5pFw44kRksKsxCGcqWY',
    keyword: 'TD Garden',
    category: 'Sports'
  },
  {
    title: 'Old State House',
    location: {
      lat: 42.358735,
      lng: -71.057454
    },
    place_id: 'ChIJ2XkgRoRw44kRvYSoqILW2Og',
    keyword: 'Boston Massacre',
    category: 'History'
  }
];

// Complete the following function to initialize the map
function initMap() {
  // use a constructor to create a new map JS object. You can use the coordinates
  // 42.354954,-71.065489 Boston Common, Boston, MA, USA
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 42.354954,
      lng: -71.065489
    },
    zoom: 14
  });

  var largeInfowindow = new google.maps.InfoWindow();
  var bounds = new google.maps.LatLngBounds();

  // The following group uses the location array to create an array of markers on initialize.
  for (var i = 0; i < locations.length; i++) {
    // Get the position from the location array.
    var position = locations[i].location;
    var title = locations[i].title;
    var keyword = locations[i].keyword;
    // Create a marker per location, and put into markers array.
    var marker = new google.maps.Marker({
      map: map,
      position: position,
      title: title,
      animation: google.maps.Animation.DROP,
      id: i,
      wiki_keyword: keyword
    });
    // Push the marker to our array of markers.
    markers.push(marker);
    // Create an onclick event to open an infowindow at each marker.
    marker.addListener('click', function () {
      populateInfoWindow(this, largeInfowindow);
      toggleBounce(this);
    });
    bounds.extend(markers[i].position);

  }

  // This function populates the infowindow when the marker is clicked. We'll only allow
  // one infowindow which will open at the marker that is clicked, and populate based
  // on that markers position.
  function populateInfoWindow(marker, infowindow) {
    // Check to make sure the infowindow is not already opened on this marker.
    if (infowindow.marker != marker) {
      // Clear the infowindow content to give the streetview time to load.
      infowindow.marker = marker;
      // Make sure the marker property is cleared if the infowindow is closed.
      infowindow.addListener('closeclick', function () {
        infowindow.marker = null;
      });
      infowindow.setContent('<div id="marker-title"></div></br><div id="pano"></div></br><div id="wiki-link"></div>');
      var streetViewService = new google.maps.StreetViewService();
      var radius = 50;
      // In case the status is OK, which means the pano was found, compute the
      // position of the streetview image, then calculate the heading, then get a
      // panorama from that and set the options
      function getStreetView(data, status) {
        if (status == google.maps.StreetViewStatus.OK) {
          var nearStreetViewLocation = data.location.latLng;
          var heading = google.maps.geometry.spherical.computeHeading(
            nearStreetViewLocation, marker.position);
          // infowindow.setContent('<div>' + marker.title + '</div></br><div id="pano"></div>');
          var panoramaOptions = {
            position: nearStreetViewLocation,
            pov: {
              heading: heading,
              pitch: 10
            }
          };
          var panorama = new google.maps.StreetViewPanorama(
            document.getElementById('pano'), panoramaOptions);
        } else {
          panoElem.text("No Street View Fount")
          // infowindow.setContent('<div>' + marker.title + '</div>' +
          //   '<div>No Street View Found</div>');
        }
      }
      // Use streetview service to get the closest streetview image within
      // 50 meters of the markers position
      streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
      // Open the infowindow on the correct marker.
      infowindow.open(map, marker);
      document.getElementById('marker-title').textContent = marker.title;
      // Add a link to wikipedia via ajax call
      var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + 
        marker.wiki_keyword + '&format=json&callback=wikiCallback';
      var wikiRequestTimeout = setTimeout(function () {
        document.getElementById('wiki-link').textContent = "Failed To Get Wikipedia Response";
      }, 8000);

      $.ajax({
          url: wikiUrl,
          dataType: "jsonp",
          jsonp: "callback",
          success: function (response) {

            articleStr = response[1][0];
            var url = 'http://en.wikipedia.org/wiki/' + articleStr;
            document.getElementById('wiki-link').innerHTML = 'Wikipedia: <a href="' + url +
              '" target="_blank">' + articleStr + '</a>';

            clearTimeout(wikiRequestTimeout);
          }
        })
        .fail(function () {
          document.getElementById('wiki-link').innerHTML = 'Wikipedia Article Not Found';
        });
    }
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // an async function 
  async function toggleBounce(marker) {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
      await sleep(3500);
      marker.setAnimation(null);
    }
  }

}

var Location = function(data) {
  this.title = ko.observable(data.title);
  this.location = ko.observable(data.location);
  this.place_id = ko.observable(data.place_id);
  this.keyword = ko.observable(data.keyword);
  this.category = ko.observable(data.category);
}

var ViewModel = function() {
  var self = this;

  this.locationsList = ko.observableArray([]);
  locations.forEach(function (locationItem) {
    self.locationsList.push(new Location(locationItem));
  });

}

ko.applyBindings(new ViewModel());
// $(document).ready(function () {
//   ViewModel();
//   initMap();
//   ko.applyBindings(new ViewModel());
// });