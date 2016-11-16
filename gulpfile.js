
var gulp = require('gulp');
var scss = require('gulp-sass');

var stylePaths = {
  src: './client/styles/main.scss',
  watch: './client/styles/**/*.scss',
  dest: './public/styles/'
};

gulp.task('compile:scss', function() {
  gulp.src(stylePaths.src)
      .pipe(scss().on('error', scss.logError))
      .pipe(gulp.dest(stylePaths.dest));
});

gulp.task('default', ['compile:scss'], function() {
  gulp.watch(stylePaths.watch, ['compile:scss']);
});
