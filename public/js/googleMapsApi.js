function googleMaps(startArray, middleArray, endArray, centerPoint){
 directionsDisplay = new google.maps.DirectionsRenderer();
  //might not need this depending on how the file is linked
// $.getScript( "http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js", function()
//   { 
//   
    
    // var script = document.createElement('script');
    // script.type = 'text/javascript';
    // script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAR2EJtACUX99FT9wslL-bPMV1Ihwbe7hc"
    // document.body.appendChild(script);

   console.log("*************1");
   console.log(document.getElementById("map-canvas"));
    // $.getScript( "https://maps.googleapis.com/maps/api/js?key=AIzaSyAR2EJtACUX99FT9wslL-bPMV1Ihwbe7hc", function()
    //     {
        console.log("*************A");
        var directionsDisplay;
        var directionsService = new google.maps.DirectionsService();
        var map;

        function initialize() {
          console.log("*************B"); 
          var center = new google.maps.LatLng(centerPoint[0], centerPoint[1]);
          var mapOptions = {
            zoom:14,
            center: center
          };        
          map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
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

        function test(){
          console.log("in the event listener " );
        }

        initialize();
        calcRoute();
  //   });
  // });  
};
