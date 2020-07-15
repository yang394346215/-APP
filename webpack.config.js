const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const htmlWebpackPlugin = require("html-webpack-plugin")
//这个配置文件，就是一个js文件，通过node中的模块操作向外暴露一个配置对象
module.exports = {
	mode:'production',
	//打包、指定入口和出口
	entry:path.join(__dirname,'./src/main.js'),//入口，webpack要打包那个文件
	output:{//输出文件相关配置
		path:path.join(__dirname,'./dist'),//打包到那个目录
		filename:'bundle.js'//这是指定的文件名字
	},
	//html-webpack-plugin的配置
	plugins:[
		new htmlWebpackPlugin({//创建一个内存中生成html的插件
			template:path.join(__dirname,'./src/index.html'),//选择要加载到内存中的页面
			filename:'index.html'//指定生成页面名称
		}),
		new VueLoaderPlugin()
	],
	module:{//配置所有第三方模块加载器
		rules:[//所有第三方模块匹配规则
			//这里意思是：import到结尾是.css的文件就调用use里的两个模块去解析
			{test: /\.css$/,use: ['vue-style-loader','style-loader', 'css-loader']},
			{test: /\.less$/,use: ['style-loader', 'css-loader','less-loader']},
			{test: /\.scss$/,use: ['style-loader', 'css-loader','sass-loader']},
			{test: /\.(jpg|png|gif)$/,use: ['url-loader?limit=148,600']},
			//limit给定的值如果大于或等于原图片的值，会被转成base64编码
			{test: /\.(eot|svg|ttf|woff|woff2)$/,use: ['url-loader']},
			//bootstrap3处理字体文件
			{test: /\.vue$/,use: ['vue-loader']},
			//处理vue文件
			{test: /\.js/,use: ['babel-loader'],exclude:/node_modules/}
		]
	},
	//导包时设置的别名
	resolve:{
		alias:{
			"vue$":"vue/dist/vue.js"
		}
	},
	//这里是消除文件超过限制大小时发出的黄色警告
	performance: {
		hints: "warning", // 枚举
		    maxAssetSize: 30000000, // 整数类型（以字节为单位）
		    maxEntrypointSize: 50000000, // 整数类型（以字节为单位）
		    assetFilter: function(assetFilename) {
				// 提供资源文件名的断言函数
				return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
		    }
	}
	
}