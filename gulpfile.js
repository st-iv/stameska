var gulp = require('gulp'),
	  browserSync = require('browser-sync'),
	  less = require('gulp-less'),
	  concat  = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    fileinclude = require('gulp-file-include'),
    uglify  = require('gulp-uglifyjs'); // Подключаем gulp-uglifyjs (для сжатия JS)
    spritesmith = require('gulp.spritesmith'); //Сборка спрайта
    autoprefixer = require('gulp-autoprefixer');
 
gulp.task('prefix', () =>
    gulp.src('src/css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('build'))
);

gulp.task('less', function(){ // Создаем таск "sass"
    return gulp.src('src/less/style.less') // Берем источник
        .pipe(less()) // Преобразуем less в CSS посредством gulp-sass
        .pipe(gulp.dest('src/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('sprite', function () {
  var spriteData = gulp.src('src/icons/sprite/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));
  return spriteData.pipe(gulp.dest('src/icons/sprite/'));
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

gulp.task('watch',['less','browser-sync'], function() {
    gulp.watch('src/less/*.less', ['less']); // Наблюдение за less файлами
     gulp.watch('src/css/*.css', browserSync.reload);
     gulp.watch('src/*.html', browserSync.reload);
      gulp.watch('src/js/**/*.js', browserSync.reload);
    
});


