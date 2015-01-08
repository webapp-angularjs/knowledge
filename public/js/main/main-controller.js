'use strict';

var mainCtrl = function($scope) {
  $scope.tagMessage = 'Welcome lyrics site!';
  $scope.pageClass = 'page-home';  
}

mainCtrl.$inject = ['$scope'];

module.exports = mainCtrl;