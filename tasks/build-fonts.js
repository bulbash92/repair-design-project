const { src, dest } = require("gulp");
const server = require("browser-sync");

const { paths } = require("./constants");

module.exports = function() {
  return src(paths.src.fonts)
    .pipe(dest(paths.build.fonts))
    .pipe(server.reload({ stream: true }));
};
