const { watch } = require("gulp");
const server = require("browser-sync");

const { paths } = require("./constants");

const images = require('./build-images');
const fonts = require('./build-fonts');
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

  images.displayName = "build:images";
  fonts.displayName = "build:fonts";
  html.displayName = "build:html";
  css.displayName = "build:css";
  js.displayName = "build:js";

  watch([paths.watch.images], images);
  watch([paths.watch.fonts], fonts);
  watch([paths.watch.html], html);
  watch([paths.watch.css], css);
  watch([paths.watch.js], js);
};
