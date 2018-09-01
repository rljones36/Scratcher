var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('default', function() {

});

gulp.task('webserver', function() {
    gulp.src('.')
        .pipe(server({
            livereload: true,
            host: '10.0.0.3',
            port:'8080',
            open: true
        }));
});