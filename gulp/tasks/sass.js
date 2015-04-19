var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');


module.exports = function(){
	gulp.task('sass', function () {
    return gulp.src('_assets/scss/main.scss')
        .pipe(sass())
        .pipe(sourcemaps.init())
        .pipe(sass({errLogToConsole: true}))
        .pipe(gulp.dest('./build/css/'));	
	});
}