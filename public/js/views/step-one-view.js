var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var stepOneTemplate = require('../../templates/adventure-step-one.hbs');

var StepOneView = Backbone.View.extend({
  tagName: 'div',
  className: 'instructions',
  initialize: function () {
    this.listenTo(this.model,'all', this.render);
  },
  render: function () {
    console.log("step 1");
    console.log(this.$el);
    var data = [];
    this.$el.html(stepOneTemplate());

    // this.collection.models.forEach(function (item) {
    //   data.push({title: item.escape('title'), description: item.escape('description') });
    // });

    // this.$el.html(myTemplate({todoData:data}));
  }
});

module.exports = StepOneView;