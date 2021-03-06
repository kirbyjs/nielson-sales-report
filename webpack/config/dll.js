// Created by kirby15 on 2/1/18.
const webpack = require('webpack');
const path = require('path');
const webpackConfig = require('./common');
const vendor = require('../vendors');

module.exports = {
    ...webpackConfig,
    entry: { vendor },
    mode: 'development',
    devtool: 'source-map',
    output: {
        filename: '[name].[chunkhash].js',
        library: '[name]',
        path: path.resolve(__dirname, '..', 'vendor-scripts')
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]',
            path: path.resolve(__dirname, '..', 'manifest', '[name].json')
        }),
        new webpack.HashedModuleIdsPlugin()
    ]
};
