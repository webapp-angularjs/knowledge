var srcDir = 'public';
var buildDir = 'build';

module.exports = {
  development: {
    env: 'development',
  },
  production: {
    env: 'production'
  },
  port: {
    server: 3000,
    proxy: 12345
  },
  assets: {
    source: {
      dir: srcDir,
      scss: srcDir + '/scss/*.{sass,scss}',
      images: srcDir + '/scss/images/**',
      scripts: srcDir + '/js/**/*.js',
      templates: srcDir + '/views/**/*.html'
    },
    build: {
      dir: buildDir,
      css: buildDir + '/css',
      images: buildDir + '/css/images',
      scripts: buildDir + '/js',
      templates: buildDir + '/views'
    }
  }
};