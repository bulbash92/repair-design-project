const { src, dest } = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const minify = require("gulp-clean-css");
const server = require("browser-sync");

const { paths } = require("./constants");

module.exports = function() {
  return src(paths.src.css)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(minify())
    .pipe(sourcemaps.write())
    .pipe(dest(paths.build.root))
    .pipe(server.reload({ stream: true }));
};
