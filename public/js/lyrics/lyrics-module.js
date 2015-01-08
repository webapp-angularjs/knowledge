'use strict';

var lyricsCtrl = require('./lyrics-controller');
var lyricsService = require('./lyrics-service');

angular.module('k4s-app-lyrics', [])
  .controller('lyricsCtrl', lyricsCtrl)
  .factory('lyricsService', lyricsService);
