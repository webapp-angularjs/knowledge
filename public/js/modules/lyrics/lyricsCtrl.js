'use strict';

angular.module('lyricsModule', [])
  .controller('lyricsCtrl', ['$scope', function($scope) {
    $scope.tagMessage = 'Nothing beats a pocket protector!';
    $scope.pageClass = 'page-about';
  }]);