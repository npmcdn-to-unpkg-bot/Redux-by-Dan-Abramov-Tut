const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () =>
    gulp.src('src/app.js')
        .pipe(babel({
            "presets": ['es2015'],
            "plugins": ["transform-object-rest-spread"]
        }))
        .pipe(gulp.dest('dist'))
);