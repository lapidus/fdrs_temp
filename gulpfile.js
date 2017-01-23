//
// var gulp = require('gulp');
// var scss = require('gulp-sass');
//
// var stylePaths = {
//   src: './client/styles/main.scss',
//   watch: './client/styles/**/*.scss',
//   dest: './public/styles/'
// };
//
// gulp.task('compile:scss', function() {
//   gulp.src(stylePaths.src)
//       .pipe(scss().on('error', scss.logError))
//       .pipe(gulp.dest(stylePaths.dest));
// });
//
// gulp.task('default', ['compile:scss'], function() {
//   gulp.watch(stylePaths.watch, ['compile:scss']);
// });

var gulp = require('gulp');

var postcss = require('gulp-postcss');
var partialImport = require('postcss-partial-import');
var cssnext = require('postcss-cssnext');
var autoprefixer = require('autoprefixer');

gulp.task('css', function() {
  var processors = [
    partialImport(),
    cssnext({browsers: ['> 1%']})
  ];

  return gulp.src('./client/styles/main.css')
            .pipe(postcss(processors))
            .pipe(gulp.dest('./public/styles'));
});

gulp.task('default', function() {
  gulp.watch('./client/styles/**/*.css', ['css']);
});
