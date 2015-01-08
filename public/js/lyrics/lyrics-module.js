'use strict';

var lyricsCtrl = require('./lyrics-controller');
var lyricsService = require('./lyrics-service');

angular.module('ks-app-lyrics', [])
  .controller('lyricsCtrl', lyricsCtrl)
  .factory('lyricsService', lyricsService);
