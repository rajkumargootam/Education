var angularApp = angular.module('educateApp', ['ngRoute', 'ngResource', 'ngMaterial', 'ngAnimate']);

angularApp.config(function ($routeProvider){
  $routeProvider
  .when ('/',
  {
    templateUrl: 'list/main.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  })

  .when ('/jobseeker',
  {
    templateUrl: 'list/jobseeker.html',
    controller: 'JobseekerCtrl',
    controllerAs: 'job'
  })
  .when ('/employer',
  {
    templateUrl: 'list/employer.html',
    controller: 'EmployerCtrl',
    controllerAs: 'employ'
  })
  })

  angularApp.controller("MainCtrl",['$resource','$filter',function($resource,$filter){
  var vm=this;
  console.log("hello world")


}])

  angularApp.controller("JobseekerCtrl",['$resource','$filter',function($resource,$filter){
  var vm=this;
  console.log("hello world")


}])
angularApp.controller("EmployerCtrl",['$resource','$filter',function($resource,$filter){
var vm=this;
console.log("hello world")


}])
