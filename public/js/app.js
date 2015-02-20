// public/js/app.js
require('./routes/appRoutes');
require('./main/main-module');
require('./lyrics/lyrics-module');
require('./components/common-header/common-header-module');
require('./components/common-footer/common-footer-module');
require('./components/common-container/common-container-module');
require('./components/constants/constants-module');

var modules = ['ngRoute', 'ngAnimate', 'appRoutes', 'ks-app-main', 'ks-app-lyrics', 
  'ks-app-container', 'ks-constants'];

angular.module('knowledgeApp', modules);