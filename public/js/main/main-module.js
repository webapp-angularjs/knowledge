'use strict';

require('../components/common-modules/common-module');

var mainCtrl = require('./main-controller');
var modules = ['ks-app-module'];

angular.module('ks-app-main', modules)
  .controller('mainCtrl', mainCtrl);
