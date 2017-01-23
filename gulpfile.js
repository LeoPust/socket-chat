'use strict';
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    pump = require('pump');

gulp.task('sass', function () {
    return gulp.src([
        './node_modules/angular-material/angular-material.css',
        './node_modules/bootstrap/dist/css/bootstrap.min.css',
        './sass/*.css',
        './sass/**/*.scss'
    ])
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(concat('all.min.css'))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('js::pump::app', function(cb) {
    pump([
        gulp.src([
            './node_modules/moment/min/moment.min.js',
            './node_modules/angular/angular.min.js',
            './node_modules/angular-animate/angular-animate.min.js',
            './node_modules/angular-aria/angular-aria.min.js',
            './node_modules/angular-resource/angular-resource.min.js',
            './node_modules/angular-route/angular-route.min.js',
            './node_modules/angular-sanitize/angular-sanitize.min.js',
            './node_modules/angular-touch/angular-touch.min.js',
            './node_modules/angular-ui-router/release/angular-ui-router.min.js',
            './node_modules/angular-cookies/angular-cookies.min.js',
            './node_modules/angular-material/angular-material.js',
            './node_modules/angular-moment/angular-moment.min.js',
            './node_modules/angular-material/angular-material.js',
            './app/**/*.module.js',
            './app/**/*.const.js',
            './app/**/*.js',
            '!./assets/js/vendor/**/*.js'
        ]),
        concat('all.min.js'),
        uglify(),
        gulp.dest('./js')
    ],cb);
});

gulp.task('js::app', function() {
        gulp.src([
            './node_modules/moment/min/moment.min.js',
            './node_modules/angular/angular.min.js',
            './node_modules/angular-animate/angular-animate.min.js',
            './node_modules/angular-aria/angular-aria.min.js',
            './node_modules/angular-resource/angular-resource.min.js',
            './node_modules/angular-route/angular-route.min.js',
            './node_modules/angular-sanitize/angular-sanitize.min.js',
            './node_modules/angular-touch/angular-touch.min.js',
            './node_modules/angular-ui-router/release/angular-ui-router.min.js',
            './node_modules/angular-cookies/angular-cookies.min.js',
            './node_modules/angular-material/angular-material.js',
            './node_modules/angular-moment/angular-moment.min.js',
            './node_modules/angular-material/angular-material.js',
            './app/**/*.module.js',
            './app/**/*.const.js',
            './app/**/*.js',
            '!./assets/js/vendor/**/*.js'
        ])
            .pipe(concat('all.min.js'))
            .pipe(gulp.dest('./js'));
});


gulp.task('js:watch', function () {
    gulp.watch('./app/**/*.js', ['js::app']);
});
