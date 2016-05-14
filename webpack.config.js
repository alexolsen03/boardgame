var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js",
        library: "boardgame",
        libraryTarget: "umd",
        umdNamedDefine: true,
        publicPath: './'
    },
    externals: {
        jquery: 'jQuery'
    },
    module: {
        loaders: [
            { test: /\.scss$/,
              exclude: /node_modules/,
              loader: "style!css!sass" },
            {
              test: /\.js?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel', // 'babel-loader' is also a legal name to reference
            },
            {
                test: /\.(jpg|png|gif)$/,
                include: /public\img/,
                loader: 'url'
            }
        ]
    }, plugins: {
        $: 'jquery',
        jQuery: 'jquery'
    }
};