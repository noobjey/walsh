'use strict';

/**
 * @ngdoc overview
 * @name walshApp
 * @description
 * # walshApp
 *
 * Main module of the application.
 */
angular
  .module('walshApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
  ;
  });
