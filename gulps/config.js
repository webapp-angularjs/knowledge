var srcDir = 'public';
var buildDir = 'build';

module.exports = {
  development: {
    env: 'development',
    port: 3000
  },
  production: {
    env: 'production',
    port: 80
  },
  proxy: 12345,
  assets: {
    source: {
      dir: srcDir,
      scss: srcDir + '/scss/*.{sass,scss}',
      images: srcDir + '/scss/images/**',
      scripts: srcDir + '/js/**/*.js',
      // templates: srcDir + '/views/**/*.html'
      templates: srcDir + '/**/*.html'
    },
    build: {
      dir: buildDir,
      css: buildDir + '/css',
      images: buildDir + '/css/images',
      scripts: buildDir + '/js',
      templates: buildDir + '/',
      templateName: '/js/templates.js'
    }
  }
};