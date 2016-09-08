var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

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
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(gulp.dest(paths.css));
});


gulp.task('watch', function() {
    gulp.start('buildCss');
    gulp.watch(paths.sass, ['sass']);
});