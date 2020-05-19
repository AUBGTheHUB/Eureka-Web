var path = require('path');
var hwp = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/build'),
        publicPath: '/'
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        historyApiFallback: true,
        host: '0.0.0.0',
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
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
    plugins: [
        new hwp({ template: path.join(__dirname, '/src/index.html') })
    ]
}

