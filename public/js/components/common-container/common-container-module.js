'use strict';

require('../common-header/common-header-module');
require('../common-footer/common-footer-module');
var commonContainerDirective = require('./common-container-directive');
var modules = ['templates', 'ks-app-header', 'ks-app-footer'];

angular.module('ks-app-container', modules)
  .directive('commonContainer', commonContainerDirective);