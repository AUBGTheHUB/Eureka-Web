var path = require('path');
var hwp = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist'),
        publicPath: '/'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            loader: 'babel-loader'
        },
        {
            exclude: /node_modules/,
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }
        ],
    },
    devServer: {
        historyApiFallback: true,
      },
    plugins: [
        new hwp({ template: path.join(__dirname, '/src/index.html') })
    ]
}

