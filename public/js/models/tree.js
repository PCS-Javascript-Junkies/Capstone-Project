var Backbone = require('backbone');

var Tree = Backbone.Model.extend({
  urlRoot: '/api/tree',
  defaults: {
    "weather": null,
    "location": null,
    "theme": null,
    "step1": null,
    "step2": null,
    "step3": null,
    "result": null
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