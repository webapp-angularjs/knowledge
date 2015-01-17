'use strict';

var mainCtrl = function($scope) {
  $scope.tagMessage = 'Welcome lyrics site!';
  $scope.pageClass = 'page-home';  
  $scope.menus = ['Lyrics', 'Foods']
}

mainCtrl.$inject = ['$scope'];

module.exports = mainCtrl;