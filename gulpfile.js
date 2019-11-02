const { task, series } = require("gulp");

task("build:js", require('./tasks/build-js'));
task("build:css", require('./tasks/build-css'));
task("build:html", require('./tasks/build-html'));
task("clean:build", require('./tasks/clean-build'));

task('watch:all', require('./tasks/run-server'));

task('build:all', series("clean:build", "build:js", "build:css", "build:html"));
