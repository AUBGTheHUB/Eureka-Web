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
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
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
        proxy: { "/api/**": { target: 'http://127.0.0.1:8000', secure: false } }
      },
    plugins: [
        new hwp({ template: path.join(__dirname, '/src/index.html') })
    ],
    devtool: 'cheap-module-source-map'
}

