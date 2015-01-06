var gulp = require('gulp'),
    config = require('../config'),
    gulpif = require('gulp-if'),
    minifyCSS = require('gulp-minify-css'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    sass = require('gulp-sass');

gulp.task('scss', function () {
  return gulp.src(config.assets.source.scss)
    .pipe(sass())
    .pipe(gulpif(global.isProduction, minifyCSS({keepBreaks:false})))
    .pipe(gulp.dest(config.assets.build.css))
    .pipe(reload({ stream:true }));
});

