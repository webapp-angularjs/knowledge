// public/js/app.js
require('./routes/appRoutes');
require('./main/main-module');
require('./lyrics/lyrics-module');
require('./components/common-header/common-header-module');

var modules = ['ngRoute', 'ngAnimate', 'appRoutes', 'ks-app-main', 'ks-app-lyrics', 'ks-app-header'];

angular.module('knowledgeApp', modules);