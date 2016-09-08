const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('default', () => {
  gulp.src(['source/images/**/*.{jpg,jpeg,png,gif}'], { base: 'source/images' })
    .pipe(imagemin({
      progressive: true,
    }))
    .pipe(gulp.dest('build/images'));
});
