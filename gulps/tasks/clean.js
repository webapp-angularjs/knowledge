var gulp = require('gulp'),
    del = require('del'),
    config = require('../config');

/**
 * Cleanup all files before build/re-build task
 */
gulp.task('clean', function(cb) {
  del([
    config.assets.build.css, 
    config.assets.build.images, 
    config.assets.build.scripts, 
    config.assets.build.templates
  ], cb);
});
