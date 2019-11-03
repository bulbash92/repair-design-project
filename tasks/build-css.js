const { src, dest } = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const minify = require("gulp-clean-css");
const glop = require("gulp-sass-glob");
const alias = require('gulp-style-aliases');
const server = require("browser-sync");

const { paths } = require("./constants");

module.exports = function() {
  const aliases = {
    "~normalize.css": "./node_modules/normalize.css/normalize.css",
    "components": "./src/components/**/*.scss",
    "common": "./src/common/**/*.scss"
  };

  return src(paths.src.css)
    .pipe(sourcemaps.init())
    .pipe(alias(aliases))
    .pipe(glop())
    .pipe(sass().on("error", sass.logError))
    .pipe(minify())
    .pipe(sourcemaps.write())
    .pipe(dest(paths.build.root))
    .pipe(server.reload({ stream: true }));
};
