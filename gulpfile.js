'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

var paths = {
    scripts: ['./js/*.js', '!./js/*.min.js'],
    styles: ['./scss/**/*.scss']
};

gulp.task('scripts', function() {
    return gulp.src(paths.scripts)
        // error handling
        .on('error', function(error) {
            console.error(error);
            this.emit('end');
        })
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        // load existing sourcemap (if any)
        .pipe(sourcemaps.init({
            loadmaps: true
        }))
        // create sourcemap
        .pipe(sourcemaps.write('./'))
        // set the destination
        .pipe(gulp.dest('./js'));
});

gulp.task('styles', function() {
    return gulp.src(paths.styles)
        // error handling
        .on('error', function(error) {
            console.error(error);
            this.emit('end');
        })
        // scss to css
        .pipe(sass({
            outputStyle: 'compressed',
            sourcemap: true
        }))
        // load existing sourcemap (if any)
        .pipe(sourcemaps.init({
            loadmaps: true
        }))
        // autoprefix
        .pipe(autoprefixer({
            browsers: '> 1%',
            cascade: false
        }))
        // create sourcemap
        .pipe(sourcemaps.write('./'))
        // set the destination
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.styles, ['styles']);
});

gulp.task('default', ['watch', 'scripts', 'styles']);
