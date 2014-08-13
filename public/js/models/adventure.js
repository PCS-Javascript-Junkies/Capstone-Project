var Backbone = require('backbone');

var Adventure = Backbone.Model.extend({
  urlRoot: function() {
    return '/api/themes/' + this.attributes.weather + '/' + this.attributes.geolocation;
  },
  defaults: {
    "weather": null,
    "geolocation": null
  },
  // initialize: function() { 
  //   this.on('change:geolocation', this.getThemes, this);
  // },
  // getThemes: function() {
  //   //this.save(this, { url: '/api/themes/' + this.attributes.weather + '/' + this.attributes.geolocation});
  //   this.fetch();
  //   // console.log("here is where I get the themes!");
  //   // console.log(this.model);
  // }
});

module.exports = Adventure;