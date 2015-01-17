var gulp = require('gulp');

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', ['browsersync'], function() {
  gulp.watch(global.config.assets.source.scss, ['scss']);
  gulp.watch(global.config.assets.source.images, ['images']);
  gulp.watch(global.config.assets.source.scripts, ['scripts']);
  gulp.watch(global.config.assets.source.templates, ['templates']);
});