var path = require ('path');

var config = {
    entry: __dirname + '/src/js/main.js',

    output: {
        path: __dirname + '/src/js',
        filename: 'index.js',
    },

    devServer: {
        inline: true,
        port: 8080
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}

module.exports = config;
