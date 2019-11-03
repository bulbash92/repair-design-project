const { src } = require('gulp');
const rimraf = require('gulp-rimraf');

const { paths } = require('./constants');

module.exports = function () {
  return src(paths.build.root, { read: false })
    .pipe(rimraf());
};
