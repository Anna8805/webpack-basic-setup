const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        rules:[
            {
                test:/\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [babel-loader],
            },
        ],
    },
    devServer: {
        port: 8888,
        open: 'true',
        stats: 'errors-only'
    },
};