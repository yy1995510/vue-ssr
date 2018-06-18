var path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const isDev = process.env.NODE_ENV === "development"

const config = {
    target: 'web',
    entry: {
        app: [ "babel-polyfill", path.join(__dirname, 'src/index.js')]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            { 
                test: /\.js$/, 
                exclude: /node_modules/,
                loader: "babel-loader" 
            },
            {
                test: /\.(png|gif|jpge|svg|jpg)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(styl|stylus)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    'stylus-loader'
                ]
            }
        ]
    },
    mode: isDev ? 'development' : 'production',
    plugins: [
        new VueLoaderPlugin(),
        // new webpack.DefinePlugin({
        //     "process.env" : {
        //         NODE_ENV: isDev ? '"development"' : '"production"'
        //     }
        // }),
        new HTMLPlugin(),
        new MiniCssExtractPlugin({
            filename: "index.css"
        })
    ]
}

if (isDev) {
    config.devtool = '#cheap-module-eval-source-map'
    config.devServer = {
        port: 8080,
        host: 'localhost',
        overlay: {
            errors: true
        },
        hot: true,
        open: true
    },
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}
module.exports = config 