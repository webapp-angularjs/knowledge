// public/js/app.js
require('./routes/appRoutes');
require('./main/main-module');
require('./lyrics/lyrics-module');
require('./components/common-header/common-header-module');

angular.module('knowledgeApp', ['ngRoute', 'ngAnimate', 'appRoutes', 
  'k4s-app-main', 'k4s-app-lyrics', 'k4s-app-header']);