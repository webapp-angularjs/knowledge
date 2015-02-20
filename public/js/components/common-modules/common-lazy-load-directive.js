'use strict';

var CommonLazyLoadDirective = function() {
  return {
    restrict: 'A',
    scope: {
      lazyload: '=',
      threshold: '=',
      effect: '=',
      skip_invisible: '='
    },
    link: function(scope, element, attrs) {
      if (scope.lazyload !== false) {
        element.attr('data-original', element.attr('src'));
        element.attr('src', null);
        return $(element).lazyload({
          threshold: scope.threshold || 100,
          effect: scope.effect || 'fadeIn',
          skip_invisible: scope.skip_invisible || false
        });
      }
    }
  }
};

module.exports = CommonLazyLoadDirective;
