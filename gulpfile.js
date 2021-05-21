// const srcPath = "./src/sass/**/*.scss";
// const destPath = "./dist/css";

const { src, dest, watch, parallel } = require("gulp");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const mmq = require("gulp-merge-media-queries");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const fiber = require("fibers");
const gulpStylelint = require("gulp-stylelint");
const browserSync = require("browser-sync");

const postcssOptions = [autoprefixer({ grid: true })];

sass.compiler = require("sass");

function taskSass() {
  return src("./src/sass/**/*.scss")
    .pipe(
      plumber({
        errorHandler: notify.onError("<%= error.message %>"),
      })
    )
    .pipe(sass({ fiber: fiber }))
    .pipe(postcss(postcssOptions))
    .pipe(mmq())
    .pipe(gulpStylelint({ fix: true }))
    .pipe(dest("./dist/css"));
}

function taskWatch(done) {
  watch("./src/sass/**/*.scss", taskSass);
  watch("./dist/**/*", browserSyncReload);
  done();
}

function server(done) {
  browserSync.init({
    server: {
      baseDir: "dist/",
      index: "index.html",
    },
    browser: ["chrome", "firefox"],
  });
  done();
}

function browserSyncReload(done) {
  browserSync.reload();
  done();
}

exports.default = parallel(server, taskWatch);
exports.sass = taskWatch;
