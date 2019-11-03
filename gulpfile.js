const { task, series } = require("gulp");

task("build:js", require('./tasks/build-js'));
task("build:css", require('./tasks/build-css'));
task("build:html", require('./tasks/build-html'));
task("build:fonts", require('./tasks/build-fonts'));
task("build:images", require('./tasks/build-images'));

task("clean:build", require('./tasks/clean-build'));

task('watch', require('./tasks/run-server'));

task('build', series("clean:build", "build:js", "build:css", "build:html"));
