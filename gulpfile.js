var gulp = require('gulp');

var concatCss = require('gulp-concat-css');
let cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglyfly = require('gulp-uglyfly');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');

gulp.task('default', function () {
    return gulp.src('src/style/css/*.css')
        .pipe(concatCss("style/css/style.css"))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('static/'));
});
gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('js/main.js'))
        .pipe(uglyfly())
        .pipe(gulp.dest('static/'));
});
gulp.task('image', () =>
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('static/img'))
);
gulp.task('minify', () => {
    return gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('static'));
});