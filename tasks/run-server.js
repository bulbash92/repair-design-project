const { watch } = require("gulp");
const server = require("browser-sync");

const { paths } = require("./constants");

const html = require("./build-html");
const css = require("./build-css");
const js = require("./build-js");

module.exports = function() {
  server({
    server: {
      baseDir: "./build"
    },
    tunnel: true,
    host: "localhost",
    port: 9000
  });

  html.displayName = "build:html";
  css.displayName = "build:css";
  js.displayName = "build:js";

  watch([paths.watch.html], html);
  watch([paths.watch.style], css);
  watch([paths.watch.js], js);
};
