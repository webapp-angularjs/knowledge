// public/js/app.js
require('./routes/mainCtrl.js');
require('./main/mainCtrl.js');
require('./services/lyricsService.js');
require('./lyrics/lyricsModule.js');

angular.module('knowledgeApp', ['ngRoute', 'ngAnimate', 'appRoutes', 
  'mainModule', 'lyricsModule', 'lyricsService']);