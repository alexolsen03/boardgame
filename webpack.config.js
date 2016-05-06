var webpack = require('webpack');

module.exports = {
    entry: "./lib/main.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
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
    }
};