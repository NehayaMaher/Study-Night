import gulp from "gulp";
import shell from "gulp-shell";

// المهمة الأساسية: تشغيل Parcel
gulp.task("default", shell.task(["parcel index.html"]));

// مهمة لتشغيل اختبارات Mocha
gulp.task("test", shell.task(["mocha"]));

// مهمة لتشغيل اختبارات Cypress
gulp.task("cypress", shell.task(["npx cypress run"]));



