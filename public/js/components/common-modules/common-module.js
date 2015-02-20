'use strict';

var CommonLazyLoadDirective = require('./common-lazy-load-directive');
var modules = [];

angular.module('ks-app-module', modules)
  .directive('loadLazily', CommonLazyLoadDirective);