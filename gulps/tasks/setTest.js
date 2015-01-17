var gulp = require('gulp');

/**
 * Run tasks default for a build
 */
gulp.task('setTest', function(){
  global.isProduction = false;
  global.isTest = true;
});