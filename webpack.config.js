const path = require('path');

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/js/'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',

                    //'postcss-loader'
                    'postcss-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            }
        ]
    }
};