// public/js/app.js
require('./routes/appRoutes.js');
require('./modules/main/mainCtrl.js');
require('./services/lyricsService.js');
require('./modules/lyrics/lyricsCtrl.js');

angular.module('knowledgeApp', ['ngRoute', 'ngAnimate', 'appRoutes', 
  'mainModule', 'lyricsModule', 'lyricsService']);