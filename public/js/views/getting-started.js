var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var gettingStartedTemplate = require('../../templates/getting-started-template.hbs');
var LocationChoiceView = require('./location-choice-view.js');

var GettingStartedChoiceView = Backbone.View.extend({
  el: '#adventure-parent',
  events: {
    //'click #location-se': 'clickSoutheast',
  },
  initialize: function () {
  },
  render: function () {
    $(this.el).html(gettingStartedTemplate);
  },
  // load.LocationChoiceView: function () {
  //   var locationChoiceView = new LocationChoiceView({model: this.model});
  //   locationChoiceView.render();
  // }
});

module.exports = GettingStartedChoiceView;