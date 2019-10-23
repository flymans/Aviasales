const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: resolve(__dirname, 'public'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './src/assets/images/favicon.ico'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            api: resolve(__dirname, 'src/api/'),
            assets: resolve(__dirname, 'src/assets/'),
            components: resolve(__dirname, 'src/components/')
        }
    }
};
