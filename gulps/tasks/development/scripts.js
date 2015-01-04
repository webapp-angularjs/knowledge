var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify');

gulp.task('scripts', function() {
  return gulp.src('public/js/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    // .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'));
    // .pipe(notify({ message: 'Scripts task complete' }));
});