'use strict';

var CommonFooterDirective = function() {
  return {
    restrict: 'A',
    scope: {
    },
    templateUrl: 'js/components/common-footer/common-footer.html',
    link: function(scope, element, attrs) {
    }
  }
};

CommonFooterDirective.$inject = [];

module.exports = CommonFooterDirective;