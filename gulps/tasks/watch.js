var gulp = require('gulp'),
    config = require('../config');

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', ['browsersync'], function() {
  gulp.watch(config.assets.source.scss, ['scss']);
  gulp.watch(config.assets.source.images, ['images']);
  gulp.watch(config.assets.source.scripts, ['scripts']);
  gulp.watch(config.assets.source.templates, ['templates']);
});