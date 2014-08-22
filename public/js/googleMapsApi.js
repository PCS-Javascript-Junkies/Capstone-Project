function googleMaps(startPoint, middlePoint, endPoint, centerPoint){
 directionsDisplay = new google.maps.DirectionsRenderer();

   console.log(document.getElementById("map-canvas"));
        var directionsDisplay;
        var directionsService = new google.maps.DirectionsService();
        var map;
        function initialize() {
        var centLatLong =[];
        switch(centerPoint){
          case "se":
            centLatLong.push(45.513,-122.631);
            break;
          case "ne":
            centLatLong.push(45.513,-122.631);
            break;
          case "all":
            centLatLong.push(45.513,-122.631);
            break;
          default:
            console.log("incorrect location sent");
        }
          var center = new google.maps.LatLng(centLatLong[0], centLatLong[1]);
          var mapOptions = {
            zoom:14,
            center: center,
          };        
          map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
          directionsDisplay.setMap(map);
        }

        function calcRoute() {
          var request = {
          origin: startPoint,
          destination: endPoint,
          waypoints: [
            {
              location: middlePoint,
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

        function test(){
          console.log("in the event listener " );
        }

        initialize();
        calcRoute();
};
