var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();

var configs = {
    src: {
        less: 'less/index.less'
    },
    dist: {
        css: 'css'
    },
    watch: {
        less: 'less/*.less',
        html: 'species.html'
    }
};

gulp.task('serve', ['less'], function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch(configs.watch.html).on('change', browserSync.reload);
    gulp.watch(configs.watch.less, ['less']);
});

gulp.task('less', function() {
    return gulp.src(configs.src.less)
        .pipe(less())
        .pipe(gulp.dest(configs.dist.css))
        .pipe(browserSync.stream({ match: '**/*.css' }));
});
