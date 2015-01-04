var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    server = require('gulp-express');

var env = 'development';
// env = 'production';
var fs = require('fs');
var onlyScripts = require('./gulps/util/scriptFilter');
var tasks = fs.readdirSync('./gulps/tasks/' + env).filter(onlyScripts);
tasks.forEach(function(task) {
  require('./gulps/tasks/' + env + '/' + task);
});

gulp.task('images', function() {
  return gulp.src('public/css/images/**/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('dist/css/images'))
    .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('clean', function(cb) {
  del(['dist/css', 'dist/js', 'dist/css/images', 'dist/views'], cb)
});

gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch('public/css/**/*.scss', ['scss']);
  // Watch .js files
  gulp.watch('public/js/**/*.js', ['scripts']);
  // Watch image files
  gulp.watch('public/css/images/**/*', ['images']);
  // Watch html files
  gulp.watch('public/views/**/*.html', ['templates']);
  // Create LiveReload server
  livereload.listen();
  // Watch any files in dist/, reload on change
  gulp.watch(['dist/**']).on('change', livereload.changed);
});

gulp.task('server', ['watch'], function() {
  server.run({
    file: 'server.js'
  });  
});

gulp.task('default', ['clean'], function() {
  gulp.start('scss', 'scripts', 'images', 'templates', 'server');
});