const { src, dest } = require('gulp');
const sourcemaps = require("gulp-sourcemaps");
const minify = require("gulp-uglify");
const server = require("browser-sync");

const { paths } = require('./constants');

module.exports = function () {
  return src(paths.src.js)
    .pipe(sourcemaps.init())
    .pipe(minify())
    .pipe(sourcemaps.write())
    .pipe(dest(paths.build.root))
    .pipe(server.reload({ stream: true }));
};
