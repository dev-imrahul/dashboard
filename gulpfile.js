const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss into css

function style() {
  // 1. Where is my scss file
  return gulp.src('./scss/**/*.scss')
  // 2.Pass that file throught sass compiler
  .pipe(sass().on('error', sass.logError))
  // 3. Where do i save the compiled CSS?
  .pipe(gulp.dest('./assets/css'))
  // 4. Stream changes toa all browser
  .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./scss/**/*.scss', style);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./assets/js/**/*.js', style).on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;