const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix .js('resources/js/app.js', 'public/js')
    .js('resources/js/validator.js', 'public/js')
    .sass('resources/sass/ui.scss', 'public/css')
    .sass('resources/sass/auth.scss', 'public/css')
    .version()
    .sourceMaps()
    .options({
        processCssUrls: false,
        postCss: [
            require('postcss-css-variables')()
        ]
    });

mix.browserSync('http://127.0.0.1:8000');

// mix.postCss('resources/css/app.css', 'public/css', [
//         //
//     ]);

