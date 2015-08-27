var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var csso = require('gulp-csso');

gulp.task('default', ['min-css']);

gulp.task('sass', function() {
  return gulp.src('./stylesheets/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./css'));
});

gulp.task('min-css', ['sass'], function() {
  return gulp.src('./css/*.css')
    .pipe(rename(function(path) {
      path.basename += '.min';
      path.extname = '.css';
    }))
    .pipe(csso())
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
  gulp.watch('./stylesheets/*.scss', ['min-css']);
});
