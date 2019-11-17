let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.webpackConfig({
//     module: {
//         rules: [{
//             exclude: /node_modules/,
//         }],
//     }
// });

mix.react('resources/assets/js/app.js', 'public/js')
    .browserSync({
        proxy: 'portfolio'
    })
    .version();


const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const imageminMozjpeg = require('imagemin-mozjpeg');

mix.webpackConfig({
    plugins: [
        new CopyWebpackPlugin([{
            from: 'resources/assets/imgs',
            to: 'imgs', // Laravel mix will place this in 'public/img'
        }]),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            optipng: {
                optimizationLevel: 3
            },
            jpegtran: {
                progressive: false
            },
            svgo: {
            },
            plugins: [
                imageminMozjpeg({
                    quality: 90,
                    progressive: true
                })
            ]
        })
    ]
});
