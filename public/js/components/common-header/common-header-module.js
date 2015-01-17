'use strict';

require('../translation/translation-module');

var CommonHeaderService = require('./common-header-service');
var CommonHeaderDirective = require('./common-header-directive');

var modules = ['templates', 'ks-translation'];

angular.module('ks-app-header', modules)
  .config(function($translateProvider) {
    $translateProvider
      .translations('en', require('./i18n/en'))
      .translations('vn', require('./i18n/vn'));
  })
  .factory('CommonHeaderService', CommonHeaderService)
  .directive('commonHeader', CommonHeaderDirective);
