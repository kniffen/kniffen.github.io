const gulp = require('gulp')
const gutil = require('gulp-util')
const watch = require('gulp-watch')
const sass = require('gulp-sass')
const prefix = require('gulp-autoprefixer')
const jade = require('gulp-jade')
const webserver = require('gulp-webserver')

function handleError(err) {
  console.log(err.toString())
  this.emit('end')
}

gulp.task('sass', function () {
  return gulp.src('./src/scss/*.scss')
    .pipe(sass({ outputStyle: 'expanded', includePaths: ['scss'] }))
    .on('error', handleError)
    .pipe(prefix(['last 30 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('./'))
})

gulp.task('jade', function() {
  var YOUR_LOCALS = {}
 
  gulp.src('./src/jade/**/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty: true
    }))
    .on('error', handleError)
    .pipe(gulp.dest('./'))
})

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }))
})

gulp.task('watch', function () {
  gulp.watch('src/scss/*.scss', ['sass']);
  gulp.watch('src/jade/**/*.jade', ['jade']);
  gulp.watch('src/_includes/*.jade', ['jade']);
})

gulp.task('default', ['watch', 'sass', 'jade', 'webserver'])