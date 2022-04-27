const 
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass')(require('sass')),
    prefix = require('gulp-autoprefixer'),
    merge = require('merge-stream'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    pug = require('gulp-pug'),
    livereload = require('gulp-livereload');






// HTML Task
gulp.task('html', function () {
    const main =  gulp.src('project/main/index.pug')
                        .pipe(pug({pretty: true}))
                        .pipe(gulp.dest('dist/main'))
                        .pipe(livereload());

    const fastTyping = gulp.src('project/fast_typing/index.pug')
                            .pipe(pug({pretty: true}))
                            .pipe(gulp.dest('dist/fast_typing'))
                            .pipe(livereload());
    
    const programming = gulp.src('project/programming/index.pug')
                            .pipe(pug({pretty: true}))
                            .pipe(gulp.dest('dist/programming'))
                            .pipe(livereload());

    const qudrat = gulp.src('project/qudrat/index.pug')
                        .pipe(pug({pretty: true}))
                        .pipe(gulp.dest('dist/qudrat'))
                        .pipe(livereload());


    return merge(main, fastTyping, programming, qudrat);
});



// CSS Task
gulp.task('css', function () {
    const programming = gulp.src('project/programming/design/**/*.scss')
                            .pipe(sass())
                            .pipe(prefix('last 2 versions'))
                            .pipe(concat('style.css'))
                            .pipe(gulp.dest('dist/programming'))
                            .pipe(livereload());

    const main = gulp.src('project/main/design/**/*.scss')
                    .pipe(sass())
                    .pipe(prefix('last 2 versions'))
                    .pipe(concat('style.css'))
                    .pipe(gulp.dest('dist/main'))
                    .pipe(livereload());

    const qudrat = gulp.src('project/qudrat/design/**/*.scss')
                        .pipe(sass())
                        .pipe(prefix('last 2 versions'))
                        .pipe(concat('style.css'))
                        .pipe(gulp.dest('dist/qudrat'))
                        .pipe(livereload());

    const fastTyping = gulp.src('project/fast_typing/design/**/*.scss')
                            .pipe(sass())
                            .pipe(prefix('last 2 versions'))
                            .pipe(concat('style.css'))
                            .pipe(gulp.dest('dist/fast_typing'))
                            .pipe(livereload());

    const myProjects = gulp.src('project/my_projects/design/**/*.scss')
                            .pipe(sass())
                            .pipe(prefix('last 2 versions'))
                            .pipe(concat('style.css'))
                            .pipe(gulp.dest('dist/my_projects'))
                            .pipe(livereload());

    const english = gulp.src('project/english/design/**/*.scss')
                        .pipe(sass())
                        .pipe(prefix('last 2 versions'))
                        .pipe(concat('style.css'))
                        .pipe(gulp.dest('dist/english'))
                        .pipe(livereload());

    const all = gulp.src('project/style.scss')
                    .pipe(sass())
                    .pipe(prefix('last 2 versions'))
                    .pipe(concat('style.css'))
                    .pipe(gulp.dest('dist'))
                    .pipe(livereload());



    return merge(programming, main, qudrat, fastTyping, myProjects, english, all);
});



// JS Task
gulp.task('js', function () {
    const programming = gulp.src('project/programming/js/**/*.js')
                            .pipe(babel())
                            // .pipe(uglify())
                            .pipe(concat('main.js'))
                            .pipe(gulp.dest('dist/programming'))
                            .pipe(livereload());

    const main = gulp.src('project/main/js/**/*.js')
                    .pipe(babel())
                    // .pipe(uglify())
                    .pipe(concat('main.js'))
                    .pipe(gulp.dest('dist/main'))
                    .pipe(livereload());

    const qudrat = gulp.src('project/qudrat/js/**/*.js')
                        .pipe(babel())
                        // .pipe(uglify())
                        .pipe(concat('main.js'))
                        .pipe(gulp.dest('dist/qudrat'))
                        .pipe(livereload());

    const fastTyping = gulp.src('project/fast_typing/js/**/*.js')
                            .pipe(babel())
                            // .pipe(uglify())
                            .pipe(concat('main.js'))
                            .pipe(gulp.dest('dist/fast_typing'))
                            .pipe(livereload());

    const myProjects = gulp.src('project/my_projects/js/**/*.js')
                            .pipe(babel())
                            // .pipe(uglify())
                            .pipe(concat('main.js'))
                            .pipe(gulp.dest('dist/my_projects'))
                            .pipe(livereload());

    const english = gulp.src('project/english/js/**/*.js')
                        .pipe(babel())
                        // .pipe(uglify())
                        .pipe(concat('main.js'))
                        .pipe(gulp.dest('dist/english'))
                        .pipe(livereload());

    const all = gulp.src('project/main.js')
                    .pipe(babel())
                    // .pipe(uglify())
                    .pipe(concat('main.js'))
                    .pipe(gulp.dest('dist'))
                    .pipe(livereload());


    return merge(programming, main, qudrat, fastTyping, myProjects, english, all);
});



// Watching Task
gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('project/**/*.pug', gulp.series('html'));
    gulp.watch('project/**/*.scss', gulp.series('css'));
    gulp.watch('project/**/*.js', gulp.series('js'));
});