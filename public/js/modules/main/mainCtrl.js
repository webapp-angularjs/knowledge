'use strict';

angular.module('mainModule', [])
  .controller('mainCtrl', ['$scope', function($scope) {
    $scope.tagMessage = 'Welcome lyrics site!';
    $scope.pageClass = 'page-home';
  }]);