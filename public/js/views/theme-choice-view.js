var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var themeChoiceTemplate = require('../../templates/theme-choice-template.hbs');

var ThemeChoiceView = Backbone.View.extend({
  el: '#adventure-parent',
  render: function () {
    var themes = [];
    console.log(this.model);
    console.log(this.model.attributes);
    // this.model.attributes.themes.forEach(function (item) {
    //   themes.push(item);
    // });
    // $(this.el).html(themeChoiceTemplate({theme:data}));
    console.log("theme choice view");
  },
});

module.exports = ThemeChoiceView;


// render: function () {

//     var data = [];

//     this.collection.models.forEach(function (item) {
//       data.push({title: item.escape('title'), description: item.escape('description') });
//     });

//     this.$el.html(myTemplate({todoData:data}));
//   }