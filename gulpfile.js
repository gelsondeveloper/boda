const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

//Compile sass files into css files 
gulp.task('sass', ()=> {
    return gulp.src('./app/src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/src/css'))
    .pipe(browserSync.stream());
})

//Crate a server and watching files 
gulp.task('serve', () => {
    browserSync.init({
        server: './'
    });

    gulp.watch('./app/src/scss/*.scss', ['sass']);
    gulp.watch('./*.html').on('change', browserSync.reload);
})

gulp.task('default', ['serve']);