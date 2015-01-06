var gulp = require('gulp'),
    config = require('../config'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    source = require('vinyl-source-stream2'),
    bundleLogger = require('../util/bundleLogger'),
    handleErrors = require('../util/handleErrors'),
    watchify     = require('watchify'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    browserify = require('browserify');

gulp.task('scripts', function() {
  var bundler = browserify({
    cache: {},
    packageCache: {},
    fullPath: true,
    entries: ['./' + config.assets.source.dir + '/js/app.js'],
    extensions: ['.js'],
    debug: true
  });

  console.log('-----------------------------');
  console.log(global.isProduction);
  console.log('-----------------------------');
  var bundle = function() {
    bundleLogger.start();
    return bundler
      .bundle()
      .on('error', handleErrors)
      .pipe(source('app.js'))
      .pipe(gulpif(global.isProduction, uglify()))
      .pipe(gulp.dest(config.assets.build.scripts))
      .pipe(reload({ stream: true }))
      .on('end', bundleLogger.end);
  };

  bundler = watchify(bundler);
  bundler.on('update', bundle);

  return bundle();
});
