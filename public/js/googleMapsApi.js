function googleMaps(startArray, middleArray, endArray, centerPoint){
  //might not need this depending on how the file is linked
// $.getScript( "http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js", function()
//   { 
    $.getScript( "https://maps.googleapis.com/maps/api/js?key=AIzaSyAR2EJtACUX99FT9wslL-bPMV1Ihwbe7hc", function()
        {
        console.log("*************A");
        var directionsDisplay;
        var directionsService = new google.maps.DirectionsService();
        var map;

        function initialize() {
          directionsDisplay = new google.maps.DirectionsRenderer();
          var portland = new google.maps.LatLng(45.522, -122.672);
          var mapOptions = {
            zoom:14,
            center: centerPoint
          };
          map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
          console.log("*************B");
          directionsDisplay.setMap(map);
        }

        function calcRoute() {
          var start = new google.maps.LatLng(startArray[0],startArray[1]);
          var middle = new google.maps.LatLng(middleArray[0],middleArray[1]);
          var end = new google.maps.LatLng(endArray[0],endArray[1]);
          var request = {
          origin: start,
          destination: end,
          waypoints: [
            {
              location: middle,
              stopover:true
            }],
          provideRouteAlternatives: false,
          travelMode:  google.maps.TravelMode.DRIVING,
        }
          directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
              directionsDisplay.setDirections(response);
            }
          });
        }
          console.log("*********************C");
        google.maps.event.addDomListener(window, 'load', initialize);

        calcRoute();
    });
  // });  
};
