const gulp = require('gulp')
const poststylus = require('poststylus')
const autoprefixer = require('autoprefixer')
const stylus = require('gulp-stylus')
const plumber = require('gulp-plumber')
const child = require('child_process')
const gutil = require('gulp-util')
const rename = require('gulp-rename')
const githubpages = require('gulp-gh-pages')

gulp.task('css', () => {
  return gulp.src('./src/styl/main.styl')
      .pipe(plumber())
      .pipe(stylus({
        use: [
          poststylus(['autoprefixer'])
        ]
      }))
      .pipe(rename('oskar.css'))
      .pipe(gulp.dest('docs/css'))
})

gulp.task('watch', () => {
  gulp.watch('./src/styl/**/*.styl', ['css'])
})

gulp.task('jekyll', () => {
  const jekyll = child.spawn('jekyll', ['serve',
    '--watch',
    '--incremental',
    '--drafts'
  ])

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message))
  }

  jekyll.stdout.on('data', jekyllLogger)
})

gulp.task('deploy', () => {
  return gulp.src('./_site/**/*')
    .pipe(githubpages())
})

gulp.task('default', ['watch'], function () {
  gulp.start('css', 'jekyll')
})

