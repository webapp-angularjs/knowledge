var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    config = require('../config');

gulp.task('nodemon', function(cb) { 
  return nodemon({
    script: 'server.js',
    env: { 
      'PORT': config.port.proxy,
      'NODE_ENV': global.isProduction ? config.production.env : config.development.env
    }     
  }).on('start', function(){
    cb();
  });
});    