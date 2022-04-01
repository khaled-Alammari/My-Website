const 
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass')(require('sass')),
    prefix = require('gulp-autoprefixer'),
    merge = require('merge-stream'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    pug = require('gulp-pug');






// HTML Task
gulp.task('html', function () {
    const main =  gulp.src('project/main/index.pug')
                        .pipe(pug({pretty: true}))
                        .pipe(gulp.dest('dist/main'));

    const fastTyping = gulp.src('project/fast_typing/index.pug')
                            .pipe(pug({pretty: true}))
                            .pipe(gulp.dest('dist/fast_typing'));
    
    const programming = gulp.src('project/programming/index.pug')
                            .pipe(pug({pretty: true}))
                            .pipe(gulp.dest('dist/programming'));

    const qudrat = gulp.src('project/qudrat/index.pug')
                        .pipe(pug({pretty: true}))
                        .pipe(gulp.dest('dist/qudrat'))


    return merge(main, fastTyping, programming, qudrat);
});



// CSS Task
gulp.task('css', function () {
    const programming = gulp.src('project/programming/design/*.scss')
                            .pipe(sass({outputStyle: 'compressed'}))
                            .pipe(prefix('last 2 versions'))
                            .pipe(concat('style.css'))
                            .pipe(gulp.dest('dist/programming'));

    const main = gulp.src('project/main/design/style/*.scss')
                    .pipe(sass({outputStyle: 'compressed'}))
                    .pipe(prefix('last 2 versions'))
                    .pipe(concat('style.css'))
                    .pipe(gulp.dest('dist/main'));

    const qudrat = gulp.src('project/qudrat/design/*.scss')
                        .pipe(sass({outputStyle: 'compressed'}))
                        .pipe(prefix('last 2 versions'))
                        .pipe(concat('style.css'))
                        .pipe(gulp.dest('dist/qudrat'));

    const fastTyping = gulp.src('project/fast_typing/design/*.scss')
                            .pipe(sass({outputStyle: 'compressed'}))
                            .pipe(prefix('last 2 versions'))
                            .pipe(concat('style.css'))
                            .pipe(gulp.dest('dist/fast_typing'));

    const myProjects = gulp.src('project/my_projects/design/*.scss')
                            .pipe(sass({outputStyle: 'compressed'}))
                            .pipe(prefix('last 2 versions'))
                            .pipe(concat('style.css'))
                            .pipe(gulp.dest('dist/my_projects'));

    const english = gulp.src('project/english/design/*.scss')
                        .pipe(sass({outputStyle: 'compressed'}))
                        .pipe(prefix('last 2 versions'))
                        .pipe(concat('style.css'))
                        .pipe(gulp.dest('dist/english'));

    const all = gulp.src('project/style.scss')
                    .pipe(sass({outputStyle: 'compressed'}))
                    .pipe(prefix('last 2 versions'))
                    .pipe(concat('style.css'))
                    .pipe(gulp.dest('dist'));



    return merge(programming, main, qudrat, fastTyping, myProjects, english, all);
});


// JS Task
gulp.task('js', function () {
    const programming = gulp.src('project/programming/js/**/*.js')
                            .pipe(babel())
                            .pipe(uglify())
                            .pipe(concat('main.js'))
                            .pipe(gulp.dest('dist/programming'));

    const main = gulp.src('project/main/js/**/*.js')
                    .pipe(babel())
                    .pipe(uglify())
                    .pipe(concat('main.js'))
                    .pipe(gulp.dest('dist/main'));

    const qudrat = gulp.src('project/qudrat/js/**/*.js')
                        .pipe(babel())
                        .pipe(uglify())
                        .pipe(concat('main.js'))
                        .pipe(gulp.dest('dist/qudrat'));

    const fastTyping = gulp.src('project/fast_typing/js/**/*.js')
                            .pipe(babel())
                            .pipe(uglify())
                            .pipe(concat('main.js'))
                            .pipe(gulp.dest('dist/fast_typing'));

    const myProjects = gulp.src('project/my_projects/js/**/*.js')
                            .pipe(babel())
                            .pipe(uglify())
                            .pipe(concat('main.js'))
                            .pipe(gulp.dest('dist/my_projects'));

    const english = gulp.src('project/english/js/**/*.js')
                        .pipe(babel())
                        .pipe(uglify())
                        .pipe(concat('main.js'))
                        .pipe(gulp.dest('dist/english'));

    const all = gulp.src('project/main.js')
                    .pipe(babel())
                    .pipe(uglify())
                    .pipe(concat('main.js'))
                    .pipe(gulp.dest('dist'));


    return merge(programming, main, qudrat, fastTyping, myProjects, english, all);
});