var gulp = require('gulp')
    runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build', function(cb) {
  runSequence('clean', [
      'scss',
      'scripts',
      'images',
      'templates'
    ],
    'nodemon',
    cb
  );
});