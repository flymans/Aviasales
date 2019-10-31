const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

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
        }),
        new CopyPlugin([{from: './src/assets', to: 'src/assets'}]),
        new MomentLocalesPlugin({
            localesToKeep: ['ru']
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            api: resolve(__dirname, 'src/api/'),
            assets: resolve(__dirname, 'src/assets/'),
            components: resolve(__dirname, 'src/components/'),
            actions: resolve(__dirname, 'src/actions/'),
            reducers: resolve(__dirname, 'src/reducers/')
        }
    }
};
