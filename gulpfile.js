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
//处理img
gulp.task('img',() => {
    gulp.src('./src/img/index/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/index'))
})
gulp.task('registor',() => {
    gulp.src('./src/img/register/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/registor'))
})
gulp.task('login',() => {
    gulp.src('./src/img/login/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/login'))
})
//处理sass
gulp.task('sass',()=>{
    gulp.src('./src/sass/*.scss')
    //调用sass方法
    .pipe(sass({outputStyle: 'expanded'}))
    //压缩  不想压缩就注掉
    //.pipe(cssnano())
    //重命名
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/css'));
})
//处理js
gulp.task('js',()=> {
    gulp.src('./src/js/ES5/*.js')
    //合并
    //.pipe(concat('main.nim.js'))
    //压缩
    .pipe(uglify())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./dist/js'))

})
//Es6转Es5
gulp.task('es6',() => {
    gulp.src('./src/js/ES6/*.js')
    .pipe(babel({presets: ['@babel/env']}))
    .pipe(gulp.dest('./src/js/ES5'));
})
//监听
gulp.task('default',()=>{
    //监听sass
    gulp.watch('./src/sass/*.scss',['sass']);
    //监听js
    gulp.watch('./src/js/ES5/*.js',['js']);
    //ES6转Es5
    gulp.watch('./src/js/ES6/*.js',['es6']);
    
  
})


