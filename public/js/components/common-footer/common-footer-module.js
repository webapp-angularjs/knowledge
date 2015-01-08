'use strict';

require('../translation/translation-module');

var CommonFooterDirective = require('./common-footer-directive');

var modules = ['templates', 'ks-translation'];

angular.module('ks-app-footer', modules)
  .config(function($translateProvider) {
    $translateProvider
      .translations('en', require('./i18n/en'))
      .translations('vn', require('./i18n/vn'));
  })
  .directive('commonFooter', CommonFooterDirective);
