var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    browserSync = require("browser-sync");

gulp.task('scss', function () {
  return gulp.src('public/css/**/*.scss')
    .pipe(sass())
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({stream:true}));
});