var gulp = require('gulp'),
    browsersync = require('browser-sync'),
    config = require('../config');

gulp.task('config', function() {
  global.config = config;
});