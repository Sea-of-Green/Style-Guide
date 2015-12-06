var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
// Sass & CSS
var sass = require('gulp-sass');
var neat = require('node-neat').includePaths;
var autoprefixer = require('gulp-autoprefixer');
var cmq = require('gulp-combine-media-queries');
var csso = require('gulp-csso');
// HTML
var inject = require('gulp-inject');
var include = require('gulp-file-include');
var toc = require('gulp-toc');
var md = require('gulp-markdown');
// Javascript
var coffee = require('gulp-coffee');
var uglify = require('gulp-uglify');
// Servers
var browserSync = require('browser-sync');
var surge = require('gulp-surge');

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
  cssPath: 'dist/css',
  css: 'dist/css/**/*.css',

  coffeePath: 'src/scripts/',
  coffee: 'src/scripts/**/*.coffee',
  jsPath: 'dist/js',
  js: 'dist/js/**/*.js'
}

var ignoreRegex = [/([\S])+(?=[closed])\w+/, /([\S])+(?=[open])\w+/];

gulp.task('default', ['build']);

// Sass & CSS

gulp.task('sass', function() {
  return gulp.src(paths.sass)
    .pipe(sass({
      includePaths: neat
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
      includePaths: neat
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(cmq())
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.cssPath));
});

gulp.task('clean:css', function() {
  del(paths.cssPath);
});

// HTML

gulp.task('html:md', function() {
  return gulp.src(paths.content)
    .pipe(md({
      gfm: true,
      smartypants: true
    }))
    .pipe(concat({path: '_content.html'}))
    .pipe(gulp.dest(paths.partialsPath))
});

gulp.task('html', ['html:md'], function() {
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
      openLI: '<li class="nav__link nav__link--<%= level %>"><a data-scroll href="#<%= anchor %>"><%= text %></a>'
    }))
    .pipe(gulp.dest(paths.dist))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('clean:html', function() {
  del('dist/**/*.html');
});

// Javascript

gulp.task('coffee', function() {
  return gulp.src(paths.coffee)
    .pipe(coffee({
      bare: true
    }))
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest(paths.jsPath))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('coffee:debug', function() {
  return gulp.src(paths.coffee)
    .pipe(coffee({
      bare: true
    }))
    .pipe(concat('main.js'))
    .pipe(gulp.dest(paths.jsPath))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('clean:coffee', function() {
  del(paths.jsPath);
});

// Move stuff

gulp.task('images', function() {
  return gulp.src('src/images/**')
    .pipe(gulp.dest('dist/images/'));
});

gulp.task('downloads', function() {
  return gulp.src('src/downloads/**')
    .pipe(gulp.dest('dist/downloads/'));
});

gulp.task('fonts', function() {
  return gulp.src('src/fonts/**')
    .pipe(gulp.dest('dist/fonts/'));
});

// Clean & Build

gulp.task('clean', function() {
  del([cssPath, jsPath, 'dist/index.html']);
});

gulp.task('clean:all', function() {
  del('dist');
});

gulp.task('build', ['sass', 'coffee', 'html', 'images', 'downloads', 'fonts']);

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
  gulp.watch(paths.coffee, ['coffee']);
});

gulp.task('deploy', function() {
  return surge({
    project: './dist',         // Path to your static build directory
    domain: 'style.sea-of-green.com'  // Your domain or Surge subdomain
  });
});

gulp.task('build:deploy', ['build'], function() {
  return surge({
    project: './dist',         // Path to your static build directory
    domain: 'style.sea-of-green.com'  // Your domain or Surge subdomain
  });
});
