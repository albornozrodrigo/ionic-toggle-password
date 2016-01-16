var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var file = './src/ion-toggle-password.js';
var dist = './dist';

gulp.task('default', function(done) {
	gulp.src(file)
	.pipe(uglify())
	.pipe(rename({extname: ".min.js"}))
	.pipe(gulp.dest(dist))

	gulp.src(file)
	.pipe(gulp.dest(dist))

	.on('end', done);
});