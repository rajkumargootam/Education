var angularApp = angular.module('educateApp', ['ngRoute', 'ngResource', 'ngMaterial', 'ngAnimate']);

angularApp.config(function ($routeProvider){
  $routeProvider
  .when ('/',
  {
    templateUrl: 'list/main.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  })

  .when ('/dashboard',
  {
    templateUrl: 'list/profile.html',
    controller: 'ProfileCtrl',
    controllerAs: 'profile'
  })
  })

  angularApp.controller("MainCtrl",['$resource','$filter',function($resource,$filter){
  var vm=this;
  console.log("hello world")


}])
angularApp.controller("ProfileCtrl",['$resource','$filter',function($resource,$filter){
var vm=this;
console.log("hello world")


}])
