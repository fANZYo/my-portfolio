const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const del = require('del');
const browserSync = require('browser-sync').create();
const runSequence = require('run-sequence');

gulp.task('sass', () => {
  return gulp.src('app/sass/styles.sass')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('html', () => {
  return gulp.src('app/**/*.html')
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('useref', () => {
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'));
});

gulp.task('js', () => {
  return gulp.src('app/js/**/*.js')
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('images', function(){
  return gulp.src('app/img/**/*.+(png|jpg|gif|svg)')
  .pipe(cache(imagemin({
    interlaced: true,
  })))
  .pipe(gulp.dest('dist/img'));
});

gulp.task('clean', function() {
  cache.clearAll();
  return del.sync('dist');
});

gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
    notify: false,
  });
});

gulp.task('watch', () => {
  gulp.watch('app/sass/**/*.sass', ['sass']);
  gulp.watch('app/**/*.html', ['html']);
  gulp.watch('app/js/**/*.js', ['js']);
});

gulp.task('default', function(callback) {
  runSequence(['sass', 'browser-sync'], 'watch',
    callback
  );
});

gulp.task('build', function(callback) {
  runSequence(
    'clean',
    'sass',
    ['useref', 'images'],
    callback
  );
});

