const { watch } = require("gulp");
const server = require("browser-sync");

const { paths } = require("./constants");

module.exports = function() {
  server({
    server: {
      baseDir: "./build"
    },
    tunnel: true,
    host: "localhost",
    port: 9000
  });

  watch([paths.watch.html], require("./build-html"));
  watch([paths.watch.style], require("./build-css"));
  watch([paths.watch.js], require("./build-js"));
};
