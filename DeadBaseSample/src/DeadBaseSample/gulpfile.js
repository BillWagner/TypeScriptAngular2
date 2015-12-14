/// <binding BeforeBuild='compile-ts' AfterBuild='install-html, install-js' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var tsc = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('install-html', function () {
    gulp.src('HtmlSource/*')
    .pipe(gulp.dest('wwwroot'));
});

gulp.task('install-js', function () {
    gulp.src(['node_modules/systemjs/dist/system.src.js',
        'node_modules/angular2/bundles/angular2.dev.js'])
    .pipe(gulp.dest('wwwroot/app/'))
});

gulp.task('install-ts', function () {
    gulp.src('TypeScriptSource/*.ts')
    .pipe(gulp.dest('wwwroot/app/'))
});


gulp.task('compile-ts', function () {
    var tsProject = tsc.createProject('TypeScriptSource/tsconfig.json');
    var sourceTsFiles = ['TypeScriptSource/*.ts', //path to typescript files 
        'node_modules/angular2/angular2.d.ts']; //reference to library .d.ts 

    var tsResult = gulp.src(sourceTsFiles)
                  .pipe(sourcemaps.init())
                  .pipe(tsc(tsProject));


    tsResult.dts.pipe(gulp.dest('wwwroot/app'));
    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('wwwroot/app'));
});

gulp.task('default', ['compile-ts', 'install-html', 'install-js']);