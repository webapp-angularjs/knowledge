var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    minifyCSS = require('gulp-minify-css'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    sass = require('gulp-sass');

gulp.task('scss', function () {
  return gulp.src(global.config.assets.source.scss)
    .pipe(sass())
    .pipe(gulpif(global.isProduction, minifyCSS({keepBreaks:false})))
    .pipe(gulp.dest(global.config.assets.build.css))
    .pipe(reload({ stream:true }));
});

