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
                    },
                    mangle: true,
                    output: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
        ],
        usedExports: true,
        sideEffects: false,
        runtimeChunk: false,
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
        maxEntrypointSize: 250000,
        maxAssetSize: 250000,
        hints: 'warning',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                modules: false,
                                useBuiltIns: 'usage',
                                corejs: 3,
                            }]
                        ],
                    }
                }
            }
        ]
    }
}
