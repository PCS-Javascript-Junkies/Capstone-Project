var Backbone = require('backbone');

var Adventure = Backbone.Model.extend({
  urlRoot: function() {
    return '/api/themes/' + this.attributes.weather + '/' + this.attributes.geolocation;
  },
  defaults: {
    "weather": null,
    "geolocation": null,
    "themes": null
  },
  initialize: function() { 
    this.on('change:geolocation', this.getThemes, this);
  },
  getThemes: function() {
    //this.save(this, { url: '/api/themes/' + this.attributes.weather + '/' + this.attributes.geolocation});
    this.fetch();
    // console.log("here is where I get the themes!");
    // console.log(this.model);
  }
  // currentStep: "step",
  // nameTest: "present adventure",
  // leftNode: null,
  // rightNode: null,
  // currentStepInfo: null, //this is the result of a GET to the DB: contains all step info
  // callNextStep: function () {
  //   if (this.leftNode === true) {
  //     console.log("left node called");
  //   } else if (this.rightNode === true) {
  //     console.log("right node called");
  //   } else {
  //     alert("Sorry, there was an error with your adventure selection, please try again.")
  //   }
  // }
}); //above is more like making a GET for each click

module.exports = Adventure;