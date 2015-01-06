var gulp = require('gulp'),
    browsersync = require('browser-sync'),
    config = require('../config');

/**
 * Run the build task and start a server with browser sync
 */
gulp.task('browsersync', ['build'], function() {
  browsersync({
    proxy: 'http://localhost:' + config.port.proxy,
    port: config.port.server,
    files: [
      config.assets.build.css,
      config.assets.build.images,
      config.assets.build.scripts,
      config.assets.build.templates
    ],
    open: false
  });
})