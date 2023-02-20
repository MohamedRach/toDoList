const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        all:'./src/script.js',
        completed:'./src/index.js'},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    watch: true
}