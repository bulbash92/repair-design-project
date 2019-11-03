/**
 * Пути которые используются для сборки проекта
 */
const paths = {
    // Тут мы укажем куда складывать готовые после сборки файлы
    build: {
        root: 'build/',
        images: 'build/images/',
        fonts: 'build/fonts/'
    },

    // Пути откуда брать исходники
    src: {

        // Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        html: 'src/*.twig',

        // В скриптах нам понадобятся только index файл
        js: 'src/index.js',

        // В стилях нам понадобятся только index файл
        css: 'src/index.scss',

        // Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        images: 'src/img/**/*.*',

        // Синтаксис fonts/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'src/fonts/**/*.*'
    },

    // Тут мы укажем, за изменением каких файлов мы хотим наблюдать
    watch: {
        html: 'src/**/*.twig',
        js: 'src/**/*.js',
        css: 'src/**/*.scss',
        images: 'src/images/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },

    // Тут мы указываем, папку которую нужно переодически чистить
    clean: './build'
};

module.exports = { paths };
