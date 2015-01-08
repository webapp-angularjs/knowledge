'use strict';

require('../translation/translation-module');

angular.module('ks-constants', ['ks-translation'])
  .config(function($translateProvider) {
    $translateProvider
      .translations('en', require('./i18n/en'))
      .translations('vn', require('./i18n/vn'));
  })
  .constant('MENUS', {
    'MENU_LIST': ['Lyric']
  });