const { src, dest } = require('gulp');
const mustache = require("gulp-mustache");
const server = require("browser-sync");

const data = require('../data');
const { paths } = require('./constants');

module.exports = function () {
  return src(paths.src.html)
    .pipe(mustache(data))
    .pipe(dest(paths.build.root))
    .pipe(server.reload({ stream: true }));
};
