var gulp         = require('gulp'),
    sass         = require('gulp-sass');

/*
 * Create variables for our project paths so we can change in one place
 */
var paths = {
  'sass'     : './scss/**/*.scss',
  'css'      : './css/',
};

/**
 * Builds the scss files
 */
gulp.task('sass', function(){
  return gulp.src(paths.sass)
    .pipe(sass({errLogToConsole: true}))
    .pipe(gulp.dest(paths.css));
});

gulp.task('default', ['sass'], function() {});

gulp.task('watch', function() {
    gulp.start('sass');
    gulp.watch(paths.sass, ['sass']);
});