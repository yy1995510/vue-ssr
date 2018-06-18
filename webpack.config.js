var path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const config = {
    entry: {
        app: [ "babel-polyfill", path.join(__dirname, 'src/index.js')]
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
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
                    MiniCssExtractPlugin.loader,
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
    mode: 'production',
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "index.css"
        })
    ]
}
module.exports = config 