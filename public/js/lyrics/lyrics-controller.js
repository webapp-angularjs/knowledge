'use strict';

var lyricsCtrl = function($scope) {
  $scope.tagMessage = 'Nothing beats a pocket protector!';
  $scope.pageClass = 'page-lyric';
};

lyricsCtrl.$inject = ['$scope'];

module.exports = lyricsCtrl;