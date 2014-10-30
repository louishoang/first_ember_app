App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
  // routes index is not neccessary
});



// similar to control in rails
App.IndexRoute = Ember.Route.extend({
  //render template
  model: function() {
    return ['louis', 'yellow', 'blue'];
    you sucks;
  }
});
