var Backbone = require('backbone');

var Adventure = Backbone.Model.extend({
  nameTest: "present adventure",
  stepOne: '',
  steoTwo: '',
  callNextStep: function () {
    
  }
});

module.exports = Adventure;