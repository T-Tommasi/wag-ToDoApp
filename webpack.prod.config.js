const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.config.js');

module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: 'hidden-source-map'
})