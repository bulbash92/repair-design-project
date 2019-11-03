const { task, series } = require("gulp");

// Registration all tasks
task("build:js", require("./tasks/build-js"));
task("build:css", require("./tasks/build-css"));
task("build:html", require("./tasks/build-html"));
task("build:fonts", require("./tasks/build-fonts"));
task("build:images", require("./tasks/build-images"));

// Registration task to clean build directory
task("clean", require("./tasks/clean-build"));

// Registration task for development mode
task("watch", require("./tasks/run-server"));

// Registration task to build all project
task(
  "build",
  series(
    "clean",
    "build:js",
    "build:css",
    "build:html",
    "build:fonts",
    "build:images"
  )
);
