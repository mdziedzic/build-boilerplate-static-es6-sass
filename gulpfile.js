const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const ifElse = require('gulp-if-else');
const argv = require('yargs').argv;

gulp.task('images', () => {
  gulp.src(['source/images/**/*.{jpg,jpeg,png,gif}'], { base: 'source/images' })
    .pipe(ifElse(argv.compress, () => imagemin()))
    .pipe(gulp.dest('build/images'));
});
