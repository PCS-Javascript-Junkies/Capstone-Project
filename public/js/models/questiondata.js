var Backbone = require('backbone');

var QuestionData = Backbone.Model.extend({
  defaults: {
    currentQuestion: "test"
  }
});

module.exports = QuestionData;