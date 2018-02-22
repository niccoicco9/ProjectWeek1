//jshint ignore: start

var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');


//Mi permette di capire se funzione Gulp
gulp.task('default', function(){
    return gutil.log('Gulp è in esecuzione');
});


//Mi permette di copiare tutti i file contenuti nella cartella nella cartella dist ad eccezione delle cartelle
gulp.task('copyAllFile', function(){
    gulp.src('*.*').pipe(gulp.dest('dist'));    //Copio tutti i file dalla cartella principale
    gulp.src('ico/*.*').pipe(gulp.dest('dist/ico')); //Copio tutte le immagini della cartella
});


//Mi permette di effettuare la qualità della scrittura dei file js
gulp.task('qualityCode', function(){
    return gulp.src('*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

