var gulp = require('gulp'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify'),
    browserSync = require("browser-sync");

gulp.task('scss', function () {
  return gulp.src('public/css/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({stream:true}));
});