var webpack = require('webpack');

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js",
        library: "boardgame",
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    externals: {
        jquery: 'jQuery'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
              query: {
                presets: ['es2015']
              }
            }
        ]
    }, plugins: {
        $: 'jquery',
        jQuery: 'jquery'
    }
};