const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');

/*
 * Create variables for our project paths so we can change in one place
 */
const paths = {
  'sass'     : './scss/atomic-default.scss',
  'css'      : './css/',
};

/**
 * Builds the scss files
 */
const sassBuild = cb => {
  return src(paths.sass)
  .pipe(sass({errLogToConsole: true}))
  .pipe(rename('atomic.css'))
  .pipe(dest(paths.css));
}

const watcher = cb => {
  watch(paths.sass, sassBuild);
}

exports.sass = sassBuild;

exports.watch = series(sassBuild, watcher)

exports.default = series(sassBuild);
