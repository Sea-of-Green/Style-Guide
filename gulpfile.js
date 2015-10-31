var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
// Sass & CSS
var sass = require('gulp-sass');
var neat = require('node-neat');
var autoprefixer = require('gulp-autoprefixer');
var cmq = require('gulp-combine-media-queries');
var csso = require('gulp-csso');
// HTML
var typogr = require('gulp-typogr');
var inject = require('gulp-inject');
var include = require('gulp-file-include');
var toc = require('gulp-toc');
var md = require('gulp-markdown');
// Javascript
var uglify = require('gulp-uglify');
// Servers
var browserSync = require('browser-sync');

var paths = {
  src: 'src/',
  dist: 'dist/',

  templatesPath: 'src/templates/',
  templates: 'src/templates/**/*.html',

  partialsPath: 'src/templates/partials/',
  partials: 'src/templates/partials/**/*.html',

  contentPath: 'src/content/',
  content: 'src/content/**/*.md',

  sassPath: 'src/stylesheets/',
  sass: 'src/stylesheets/*.scss',

  scriptsPath: 'src/scripts/',
  scripts: 'src/scripts/**/*.js',

  cssPath: 'dist/css',
  css: 'dist/css/**/*.css',

  jsPath: 'dist/js',
  js: 'dist/js/**/*.js'
}

var neatPaths = neat.includePaths;

var ignoreRegex = [/([\S])+(?=[closed])\w+/, /([\S])+(?=[open])\w+/];

gulp.task('default', ['build']);

// Sass & CSS

gulp.task('sass', function() {
  return gulp.src(paths.sass)
    .pipe(sass({
      includePaths: neatPaths
    }))
    .pipe(cmq())
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(gulp.dest(paths.cssPath))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('sass:debug', function() {
  return gulp.src(paths.sass)
    .pipe(sass({
      outputStyle: 'nested',
      includePaths: neatPaths
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(cmq())
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.cssPath));
});

// HTML

gulp.task('html:md', function() {
  return gulp.src(paths.content)
    .pipe(md())
    .pipe(concat({path: '_content.html'}))
    .pipe(gulp.dest(paths.partialsPath))
});

gulp.task('html', ['html:md', 'sass', 'js'], function() {
  var sources = gulp.src([paths.js, paths.css], {read: false});

  return gulp.src([paths.templates, '!' + paths.partialsPath, '!' + paths.partials])
    .pipe(include({
      prefix: '@@',
      basepath: paths.partialsPath
    }))
    .pipe(inject(sources, {
      ignorePath: paths.dist
    }))
    .pipe(toc({
      tocMin: 1,
      tocMax: 2,
      anchorMin: 1,
      anchorMax: 2,
      TOC: '<div class="nav__content"><%= toc %></div>',
      openUL: '<ul class="nav__list nav__list--<%= depth %>">',
      openLI: '<li class="nav__link nav__link--<%= level %>"><a href="#<%= anchor %>"><%= text %></a>'
    }))
    .pipe(typogr({
      only: ['amp', 'widont', 'smartypants']
    }))
    .pipe(gulp.dest(paths.dist))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// Javascript

gulp.task('js', function() {
  return gulp.src(paths.scripts)
    .pipe(uglify({
      mangle: true
    }))
    .pipe(gulp.dest(paths.jsPath))
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
      baseDir: paths.dist
    },
  })
});

gulp.task('watch', ['browserSync', 'build'], function () {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.templates, ['html']);
  gulp.watch(paths.content, ['html']);
  gulp.watch(paths.scripts, ['js']);
});
