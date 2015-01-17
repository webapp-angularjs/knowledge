var gulp = require('gulp');

/**
 * Run tasks default for a build
 */
gulp.task('setProduction', function(){
  global.isProduction = true;
});