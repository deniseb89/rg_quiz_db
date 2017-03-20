//= require_self
//= require_tree ./controllers
//= require ./routes
//= require angular-rails-templates
//= require_tree ./templates

angular.module('AngularApp', [
  'ngAnimate',
  'templates',
  'ui.router'
]);
