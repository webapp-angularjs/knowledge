'use strict';

var CommonHeaderDirective = function($location, CommonHeaderService) {
  return {
    restrict: 'A',
    replace: false,
    templateUrl: 'modules/common-header/common-header.html'
  };
};

CommonHeaderDirective.$inject = ['$location', 'CommonHeaderService'];

module.exports = CommonHeaderDirective;