/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

gulp.task('install-html', function () {
    gulp.src('HtmlSource/*')
    .pipe(gulp.dest('wwwroot'));
});

gulp.task('default', ['install-html']);