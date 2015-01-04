'use strict';

angular.module('mainModule', [])
  .controller('mainCtrl', ['$scope', function($scope) {
    $scope.tagMessage = 'To the moon and back!';
    $scope.pageClass = 'page-home';
  }]);