var gulp = require('gulp');

/**
 * Run tasks default for a build
 */
gulp.task('production', ['setProduction', 'watch']);