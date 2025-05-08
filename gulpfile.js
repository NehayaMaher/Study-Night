import gulp from 'gulp';
import gulpShell from 'gulp-shell';

// مهمة لتشغيل Parcel
gulp.task('default', gulpShell.task('parcel starter/index.html --open --port 1234'));

// مهمة لتشغيل اختبارات Mocha
gulp.task('mocha-test', gulpShell.task('npx mocha starter/test/shuffle.test.js'));

// مهمة لتشغيل اختبارات Cypress
gulp.task('cypress-test', gulpShell.task('npx cypress run'));
