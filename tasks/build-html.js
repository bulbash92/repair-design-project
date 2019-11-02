const { src, dest } = require('gulp');
const twig = require("gulp-twig");
const server = require("browser-sync");

const data = require('../data-base');
const { paths } = require('./constants');

module.exports = function () {
  return src(paths.src.html)
    .pipe(twig({ data }))
    .pipe(dest(paths.build.root))
    .pipe(server.reload({ stream: true }));
};
