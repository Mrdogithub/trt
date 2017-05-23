var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
//var open = require('open');

var app = {
	srcPath: 'src/', // 项目路径
	devPath: 'build/', //开发路径
	prdPath: 'dist/' //生产路径
};

gulp.task('lib', function () {
	gulp.src('bower_components/**/*') //读取bower_components 下的所有文件
	.pipe(gulp.dest(app.devPath + "vendor"))
	.pipe(gulp.dest(app.prdPath + "vendor"))
	.pipe($.connect.reload());
});

gulp.task('html', function () {
	gulp.src(app.srcPath + '**/*.html')
	.pipe(gulp.dest(app.devPath))
	.pipe(gulp.dest(app.prdPath))
	.pipe($.connect.reload());
});

gulp.task('json', function () {
	gulp.src(app.srcPath + 'data/**/*.json')
	.pipe(gulp.dest(app.devPath + "data"))
	.pipe(gulp.dest(app.prdPath + "data"))
	.pipe($.connect.reload());
});

gulp.task('less', function () {
	gulp.src(app.srcPath + 'style/**/*.less')
	.pipe($.less()) //编译less
	.pipe($.concat('all.css')) //合并所有js文件
	.pipe(gulp.dest(app.devPath + 'css'))
	.pipe($.cssmin()) //压缩css
	.pipe(gulp.dest(app.prdPath + 'css'))
	.pipe($.connect.reload());
});


gulp.task('js', function () {
	gulp.src(app.srcPath + 'script/**/*.js')
	.pipe($.concat('index.js')) //合并所有js文件
	.pipe(gulp.dest(app.devPath + 'js'))
	.pipe($.uglify()) // 生产环境压缩js
	.pipe(gulp.dest(app.prdPath + 'js'))
	.pipe($.connect.reload());
});

gulp.task('consumer', function () {
	gulp.src(app.srcPath + 'consumerModule/**/*.js')
	.pipe($.concat('index.js')) //合并所有js文件
	.pipe(gulp.dest(app.devPath + 'consumer'))
	.pipe($.uglify()) // 生产环境压缩js
	.pipe(gulp.dest(app.prdPath + 'consumer'))
	.pipe($.connect.reload());
});

gulp.task('consumerhtml', function () {
	gulp.src(app.srcPath + 'consumerModule/**/*.html')
	.pipe(gulp.dest(app.devPath + 'consumer'))
	.pipe(gulp.dest(app.prdPath + 'consumer'))
	.pipe($.connect.reload());
});

gulp.task('common', function () {
	gulp.src(app.srcPath + 'commonComponents/**/*.js')
	.pipe($.concat('index.js')) //合并所有js文件
	.pipe(gulp.dest(app.devPath + 'common'))
	.pipe($.uglify()) // 生产环境压缩js
	.pipe(gulp.dest(app.prdPath + 'common'))
	.pipe($.connect.reload());
});

gulp.task('commonhtml', function () {
	gulp.src(app.srcPath + 'commonModule/**/*.html')
	.pipe(gulp.dest(app.devPath + 'common'))
	.pipe(gulp.dest(app.prdPath + 'common'))
	.pipe($.connect.reload());
});

gulp.task('supplier', function () {
	gulp.src(app.srcPath + 'supplierModule/**/*.js')
	.pipe($.concat('index.js')) //合并所有js文件
	.pipe(gulp.dest(app.devPath + 'supplier'))
	.pipe($.uglify()) // 生产环境压缩js
	.pipe(gulp.dest(app.prdPath + 'supplier'))
	.pipe($.connect.reload());
});

gulp.task('supplierhtml', function () {
	gulp.src(app.srcPath + 'supplierModule/**/*.html')
	.pipe(gulp.dest(app.devPath + 'supplier'))
	.pipe(gulp.dest(app.prdPath + 'supplier'))
	.pipe($.connect.reload());
});

gulp.task('image', function () {
	gulp.src(app.srcPath + 'images/**/*')
	.pipe(gulp.dest(app.devPath + 'images'))
	.pipe($.imagemin()) //生产环境压缩图片
	.pipe(gulp.dest(app.prdPath + 'images'))
	.pipe($.connect.reload());
});


// 批处理任务
gulp.task('build', ['image', 'js', 'less', 'lib', 'html', 'json', 'consumer', 'supplier', 'common', 'consumerhtml', 'supplierhtml', 'commonhtml']);

//发布之前，将目录中的文件清除，避免旧的文件对当前项目造成影响
gulp.task('clean',function () {
	gulp.src([app.devPath,app.prdPath])
	.pipe($.clean());
});

gulp.task('run',['build'], function () {
	$.connect.server({
		root: [app.devPath], // 服务器读取文件的位置 
		livereload:true, // 每次变化自动刷新浏览器
		port:1234
	});
		// 监听文件变化状态，如果有变化会重新执行对应的任务
	gulp.watch('bower_components/**/*',['lib']);
	//gulp.watch('**/*.html',['html']);
	gulp.watch('data/**/*.json',['json']);
	gulp.watch('style/**/*.less',['less']);
	gulp.watch('script/**/*.js',['js']);
	gulp.watch('images/**/*',['image']);
	gulp.watch('consumerModule/**/*.js',['consumer']);
	gulp.watch('supplierModule/**/*.js',['supplier']);
	gulp.watch('commonComponents/**/*.js',['common']);
	gulp.watch('consumerModule/**/*.html',['consumerhtml']);
	gulp.watch('supplierModule/**/*.html',['supplierhtml']);
	gulp.watch('commonComponents/**/*.html',['commonhtml']);
});



gulp.task('default',['run']);
