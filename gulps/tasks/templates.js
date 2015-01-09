var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    minifyHTML = require('gulp-minify-html'),
    templateCache = require('gulp-angular-templatecache'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('templates', function() {
  gulp.src(global.config.assets.source.templates)
    .pipe(gulpif(global.isProduction, minifyHTML({comments:true, spare:true})))
    .pipe(gulp.dest(global.config.assets.build.templates))
    .pipe(templateCache(global.config.assets.build.templateName, {standalone: true}))
    .pipe(gulp.dest(global.config.assets.build.templates))
    .pipe(reload({ stream:true }));
});
