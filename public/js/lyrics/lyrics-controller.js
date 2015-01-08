'use strict';

var lyricsCtrl = function($scope) {
  $scope.tagMessage = 'Nothing beats a pocket protector!';
  $scope.pageClass = 'page-about';
};

lyricsCtrl.$inject = ['$scope'];

module.exports = lyricsCtrl;