var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    minifyHTML = require('gulp-minify-html'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    config = require('../config');

gulp.task('templates', function() {
  gulp.src(config.assets.source.templates)
    .pipe(gulpif(global.isProduction, minifyHTML({comments:true, spare:true})))
    .pipe(gulp.dest(config.assets.build.templates))
    .pipe(reload({ stream:true }));
});
