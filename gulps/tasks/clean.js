var gulp = require('gulp'),
    del = require('del');

/**
 * Cleanup all files before build/re-build task
 */
gulp.task('clean', function(cb) {
  del([
    global.config.assets.build.css, 
    global.config.assets.build.images, 
    global.config.assets.build.scripts, 
    global.config.assets.build.templates
  ], cb);
});
