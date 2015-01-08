var gulp = require('gulp'),
    browsersync = require('browser-sync');

/**
 * Run the build task and start a server with browser sync
 */
gulp.task('browsersync', ['build'], function() {
  browsersync({
    proxy: 'http://localhost:' + config.proxy,
    port: global.isProduction ? global.config.production.port : global.config.development.port,
    files: [
      global.config.assets.build.css,
      global.config.assets.build.images,
      global.config.assets.build.scripts,
      global.config.assets.build.templates
    ],
    open: false
  });
})