const path = require('path');

module.exports = {

    // bundling mode
    mode: 'production',

    // entry files
    entry: './src/main.ts',

    target: 'node',

    // output bundles (location)
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },

    // file resolutions
    resolve: {
        extensions: ['.ts', '.js'],
        fallback: {
            "url": false,
            "path": false,
            "util": false,
            "stream": false,
            "buffer": false,
            "string_decoder": false,
            "querystring": false,
            "http": false,
            "crypto": false,
            "fs": false,
            "net": false,
            "zlib": false
        }
    },

    // loaders
    module: {
        rules: [
            {
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    }
};
