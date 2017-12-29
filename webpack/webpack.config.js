var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './entry.js', // 可以是 数组 字符串 对象 [js的入口]
    output: { // 对象[js出口]
        filename: 'bundle.js', // 打包过后的js文件名
        path: __dirname + '/dist' //打包过后你要将 js 放置的输出路径
    },
    plugins: [ // 插件
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            path: __dirname + '/dist'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: { // 模块
        rules: [
            { test: /\.js/, use: ['babel-loader'] } // es6,7...转es5
        ]
    },
    devServer: {
        port: 8080,
        contentBase: __dirname,
        open: 'http://localhost:8080'
    }
}