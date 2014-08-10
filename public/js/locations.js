function location(name, address, mood){
    var obj={
        "name": this.name,
        "address": this.address,
        "mood": this.mood,
    };

    return obj;
}


module.exports = location;


<html>
  <head>
    <script type="text/javascript"
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA6LOwQYzUJ9qT0lYjk3hwBmVb_DJD_1F0">
    </script>