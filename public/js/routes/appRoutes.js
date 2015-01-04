'use strict';

angular.module('appRoutes', [])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/partials/home.html',
        controller: 'mainCtrl'
      })
      .when('/lyrics', {
        templateUrl: 'views/partials/lyrics.html',
        controller: 'lyricsCtrl'
      });
    $locationProvider.html5Mode(true);
  }]);