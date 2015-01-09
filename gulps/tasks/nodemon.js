var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('nodemon', function(cb) { 
  return nodemon({
    script: 'server.js',
    env: { 
      'PORT': global.config.proxy,
      'NODE_ENV': global.isProduction ? global.config.production.env : global.config.development.env
    }     
  }).on('start', function(){
    if(cb != null){      
      cb();
    }
  });
});    