const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    mode: 'development',
    watch: true,
    entry: {
        main: ['@babel/polyfill', path.resolve(__dirname,'src', 'main.js')],
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.js'
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' },
            { test: /\.css$/, loaders: [ 'style-loader', 'css-loader' ] }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: path.resolve(__dirname,'src', 'index.html'), to: path.resolve(__dirname,'public', 'index.html')}
        ])
    ]
};