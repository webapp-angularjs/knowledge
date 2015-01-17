var gulp = require('gulp'),
    imagemin = require('gulp-imagemin');

/**
 * Run images tasks to copy images to build directory
 */
gulp.task('images', function() {
  return gulp.src(global.config.assets.source.images)
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest(global.config.assets.build.images));
});
