'use strict';

angular.module('k4s-translation', ['pascalprecht.translate'])
  .config(function($translateProvider) {
    $translateProvider
      .translations('en', require('./i18n/en'))
      .translations('vn', require('./i18n/vn'));
  });