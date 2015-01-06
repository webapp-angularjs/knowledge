var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    config = require('../config');

/**
 * Run images tasks to copy images to build directory
 */
gulp.task('images', function() {
  return gulp.src(config.assets.source.images)
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest(config.assets.build.images));
});
