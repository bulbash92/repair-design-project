const { src, dest } = require("gulp");
const imagemin = require("gulp-imagemin");
const pngquant = require("imagemin-pngquant");
const server = require("browser-sync");

const { paths } = require("./constants");

module.exports = function() {
  return src(paths.src.images)
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        use: [pngquant()],
        interlaced: true
      })
    )
    .pipe(dest(paths.build.images))
    .pipe(server.reload({ stream: true }));
};
