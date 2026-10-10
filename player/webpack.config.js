/** @type {import('webpack').Configuration} */
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true,
                        drop_debugger: true,
                        passes: 2,
                    },
                    mangle: true,
                    output: { comments: false },
                },
                extractComments: false,
            }),
        ],
        usedExports: true,
        sideEffects: false,
    },

    target: "web",
    entry: './bin/nanofl-haxe.js',

    resolve: {
        alias: {
            three: __dirname + '/node_modules/three'
        }
    },

    output: {
        library: {
            type: 'assign-properties',
            name: 'window',
        },
        path: __dirname + '/bin',
        filename: 'nanofl-bundle.js',
    },

    externals: {
        "three": "THREE",
        "three/addons/loaders/GLTFLoader.js": "THREE_addons_GLTFLoader",
    },

    performance: {
        maxEntrypointSize: 200000,
        maxAssetSize: 200000,
        hints: 'error',
    }
}
