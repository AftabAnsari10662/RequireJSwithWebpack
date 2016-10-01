/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

var webpack = require('webpack-stream');
gulp.task('bundle', function () {


    gulp.src('wwwroot/app/app.js')
        .pipe(webpack(require("./webpack.config.js")))
       .pipe(gulp.dest('wwwroot/build/'));


});