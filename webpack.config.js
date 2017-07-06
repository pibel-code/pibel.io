const path = require('path');
const webpack = require('webpack');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015'] }
                }]
            }
        ]
    },
    context: path.resolve(__dirname, './src/js'),
    entry: {
        app: './main.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist/assets'),
        publicPath: '/js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, './src')
    }
};