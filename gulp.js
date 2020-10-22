vargulp=require('gulp');
varsass=require('gulp-sass');
gulp.task('sass',function(){
    gulp.src('./assets/sass/*.scss')
    .pipe(sass())
        .pipe(gulp.dest(function(f){
            return (f.base+"/assets/css");
        }))
});

gulp.task('default', ['sass'],function(){
    gulp.watch('./assets/sass/*.scss', ['sass']);
})