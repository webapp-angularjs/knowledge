var gulp = require('gulp'),
    notify = require('gulp-notify'),
    minifyHTML = require('gulp-minify-html');

gulp.task('templates', function() {
  var opts = {comments:true, spare:true};
  gulp.src('public/views/**/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('dist/views'))
    .pipe(notify({ message: 'Templates task complete' }));
});