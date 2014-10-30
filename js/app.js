App = Ember.Application.create(); // make a new app call App

App.Router.map(function() {

  // put your routes here
  // routes index is not neccessary
  this.resource("members", function(){
    this.resource("show", { path: "/:id" }); // member show route
  });
});
// similar to control in rails

App.IndexRoute = Ember.Route.extend({
  //render template
  model: function() {
    // var organization = {
    //   name: "Launch Academy",
    //   location: "Boston, MA",
    //   login: "launchacademy",
    //   email: "hello@launchacademy.com"
    // };
    var organization = Ember.$.getJSON("https://api.github.com/orgs/LaunchAcademy")
    return organization;
  }
});

App.MembersIndexRoute = Ember.Route.extend({
  model: function(){
    var members = Ember.$.getJSON("https://api.github.com/orgs/LaunchAcademy/members");
    return members;
  }
});
