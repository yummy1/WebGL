const path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var vueLoaderPlugin = require('vue-loader/lib/plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    //指定环境
    mode: 'development',
    // mode: 'production',
    entry: path.resolve(__dirname, "./src/main.js"),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: path.resolve(__dirname, 'assets')
    },
    // webpack自带模块
    module: {
        // 规则
        rules: [
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader'
                }]
            },
            {   test: /\.(eot|woff|ttf)$/, 
                use: [{
                    loader: 'file-loader'
                }]
            },
            {
                test: /\.css$/,
                // 规则内容
                use: ['style-loader', 'css-loader']
            },
            // 规则设置
            {
                // 匹配使用该规则的文件
                test: /\.js?$/,
                // 匹配文件中不使用该规则的文件
                exclude: /(node_modules|bower_components)/,
                // 规则内容(loader)
                use: {
                    // 使用babel-loader进行代码的翻译
                    loader: 'babel-loader',
                    options: {
                        // 使用es2015和react预处理
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 43960,
                        // outputPath: 'assets',
                        // name: "../dist/imgs/[name].[hash:7].[ext]",
                        // publicPath:"dist/"
                    }
                }]
            }
        ]
    },
    // 插件配置
    plugins: [
        new htmlWebpackPlugin({
            /*生成链接消除缓存，每个生成的文件名都不一样,类似于这样："index.bundle.js?3e368073ad67e336b700"*/
            // hash: true,
            //指定页面处理后的名字
            filename: "index.html",
            template: path.resolve(__dirname, "./public/index.html")
        }),
        /*配置热更新，先const引入webpack，然后在plugins中配置一下，然后在dexServer中将hot打开
        */
        new webpack.HotModuleReplacementPlugin(),
        new vueLoaderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV + '_aaaaa')
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, "src/assets"),
                to: path.resolve(__dirname, "dist/assets"),
                ignore: ['.*']
            }
        ])
    ],
    devServer: {
        //设置服务器访问的基本目录
        contentBase: path.resolve(__dirname, 'dist'),
        //服务器ip地址， localhost
        host: 'localhost',
        //开启
        hot: true,
        //设置端口
        port: 3000,
        open: true, //运行后自动打开浏览器
    }
}