var gulp = require('gulp');
var del = require('del');
// Sass & CSS
var sass = require('gulp-sass');
var neat = require('node-neat');
var autoprefixer = require('gulp-autoprefixer');
var cmq = require('gulp-combine-media-queries');
var csso = require('gulp-csso');
var uncss = require('gulp-uncss');
// HTML
var typogr = require('gulp-typogr');
var inject = require('gulp-inject');
var include = require('gulp-file-include');
// Javascript
var uglify = require('gulp-uglify');
// Servers
var browserSync = require('browser-sync');

var neatPaths = neat.includePaths;

gulp.task('default', ['clean', 'build']);

// Sass & CSS

gulp.task('sass', function() {
  return compressed = gulp.src('src/stylesheets/*.scss')
    .pipe(sass({
      includePaths: neatPaths
    }))
    .pipe(uncss({
      html: ['src/**/*.html']
    }))
    .pipe(cmq())
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('sass:debug', function() {
  return gulp.src('src/stylesheets/*.scss')
    .pipe(sass({
      outputStyle: 'nested',
      includePaths: neatPaths
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(uncss({
      html: ['src/**/*.html']
    }))
    .pipe(cmq())
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/css'));
});

// HTML

gulp.task('html', ['sass', 'js'], function() {
  var sources = gulp.src(['dist/**/*.js', 'dist/**/*.css'], {read: false});

  return gulp.src(['src/markup/**/*.html', '!src/markup/{includes,includes/**}'])
    .pipe(include({
      prefix: '@@',
      basepath: 'src/markup/includes'
    }))
    .pipe(inject(sources, {
      ignorePath: '/dist'
    }))
    .pipe(typogr({
      only: ['amp', 'widont', 'smartypants']
    }))
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// Javascript

gulp.task('js', function() {
  return gulp.src('src/scripts/**/*.js')
    .pipe(uglify({
      mangle: true
    }))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// Clean & Build

gulp.task('clean', function() {
  del('dist');
});

gulp.task('build', ['html'], function() {
  return gulp.src('src/images/**')
    .pipe(gulp.dest('dist/images/'));
});

// Servers & Watch

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'dist'
    },
  })
});

gulp.task('watch', ['browserSync', 'build'], function () {
  gulp.watch('src/stylesheets/**/*.scss', ['sass']);
  gulp.watch('src/markup/**/*.html', ['html']);
  gulp.watch('src/scripts/**/*.html', ['js']);
});
