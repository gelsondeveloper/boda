var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
 
gulp.task('sass', function () {
   return gulp.src('webapp/scss/*.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./webapp/css'))
});
gulp.task('css', function () {
   return gulp.src('./styles/**/*.css')
      .pipe(uglifycss({
        "maxLineLen": 80,
        "uglyComments": true
      }))
      .pipe(gulp.dest('./dist/'));
  });

  gulp.task('run', ['sass', 'css']);

  gulp.task('watch', function () {
      gulp.watch('./sass/*sass', ['sass']);
      gulp.watch('./css/*.css', []);
  });

  gulp.task('default', ['run', 'watch']);