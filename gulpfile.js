var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var csso = require('gulp-csso');
var typogr = require('gulp-typogr');

gulp.task('default', ['min-css', 'typo']);

gulp.task('sass', function() {
  return gulp.src('./src/stylesheets/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('min-css', ['sass'], function() {
  return gulp.src('./dist/css/main.css')
    .pipe(rename(function(path) {
      path.basename += '.min';
      path.extname = '.css';
    }))
    .pipe(csso())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('typo', function() {
  return gulp.src('./src/*.html')
    .pipe(typogr({
      only: ['amp', 'widont', 'smartypants']
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function () {
  gulp.watch('./src/stylesheets/*.scss', ['min-css']);
  gulp.watch('./src/*.html', ['typo']);
});
