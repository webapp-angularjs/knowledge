'use strict';

var CommonHeaderDirective = function() {
  return {
    restrict: 'A',
    scope: {
      callBack: '&callBack'
    },
    templateUrl: 'js/components/common-header/common-header.html',
    link: function(scope, element, attrs) {
    }
  }
};

CommonHeaderDirective.$inject = [];

module.exports = CommonHeaderDirective;