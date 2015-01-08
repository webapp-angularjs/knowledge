'use strict';

require('../translation/translation-module');

var CommonHederService = require('./common-header-service');
var CommonHederDirective = require('./common-header-directive');

angular.module('k4s-app-header', ['k4s-translation'])
  .config(function($translateProvider) {
      $translateProvider
        .translations('en', require('./i18n/en'))
        .translations('vn', require('./i18n/vn'));
    }
  )
  .factory('CommonHederService', CommonHederService)
  .directive('k4sCommonHeader', CommonHederDirective);