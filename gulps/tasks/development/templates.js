var gulp = require('gulp'),
    notify = require('gulp-notify');

gulp.task('templates', function() {
  gulp.src('public/views/**/*.html')
    .pipe(gulp.dest('dist/views'))
    .pipe(notify({ message: 'Templates task complete' }));
});