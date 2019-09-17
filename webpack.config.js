const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        }, {
            test: /\.css$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                // you can specify a publicPath here
                // by default it uses publicPath in webpackOptions.output
                    publicPath: '../',
                    hmr: process.env.NODE_ENV === 'development',
                },
            },
            'css-loader',
            ],
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
        filename: '[name].css',
        }),
    ],
    devServer: {
        overlay: true
    }
}
