//jshint ignore: start

var gulp = require('gulp');
var gutil = require('gulp-util');


//Mi permette di capire se funzione Gulp
gulp.task('default', function(){
    return gutil.log('Gulp è in esecuzione');
});



gulp.task('copyAllFile', function(){
    gulp.src('*.*').pipe(gulp.dest('dist'));
})

