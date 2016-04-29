const gulp = require('gulp');
const babel = require('gulp-babel');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('default', () =>
    gulp.src('src/app.js')
        .pipe(babel({
            "presets": ['es2015'],
            "plugins": ["transform-object-rest-spread"]
        }))
        .pipe(gulp.dest('dist'))
);

gulp.task('lint', function() {
  return gulp.src('./src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});