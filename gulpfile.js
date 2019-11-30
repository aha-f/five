let gulp =require ('gulp'),
    rename = require('gulp-rename'),
    sass  = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    imagemin = require('gulp-imagemin');
//发布任务
gulp.task('test',() => {
    console.log('hello gulp');
})
gulp.task('img',() => {
    gulp.src('./src/img/index/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/index'))
})

