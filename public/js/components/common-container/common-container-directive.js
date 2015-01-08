'use strict';

var CommonContainerDirective = function() {
  return {
    restrict: 'A',
    transclude: true,
    templateUrl: 'js/components/common-container/common-container.html'
  }
};

module.exports = CommonContainerDirective;