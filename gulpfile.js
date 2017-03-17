var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	less = require('gulp-less'),
	concat  = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    fileinclude = require('gulp-file-include'),
    uglify  = require('gulp-uglifyjs'); // Подключаем gulp-uglifyjs (для сжатия JS)



gulp.task('less', function(){ // Создаем таск "sass"
    return gulp.src('src/less/style.less') // Берем источник
        .pipe(less()) // Преобразуем less в CSS посредством gulp-sass
        .pipe(gulp.dest('src/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'src' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('fileinclude', function() {
  gulp.src(['index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('watch',['browser-sync', 'less'], function() {
    gulp.watch('src/less/**/*.less', ['less']); // Наблюдение за less файлами
     gulp.watch('src/*.html', browserSync.reload);
      gulp.watch('src/js/**/*.js', browserSync.reload);
    
});


