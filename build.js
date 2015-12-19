var Metalsmith  = require('metalsmith');
var branch      = require('metalsmith-branch');
// HTML
var layouts     = require('metalsmith-layouts');
var markdown    = require('metalsmith-markdown');
var permalinks  = require('metalsmith-permalinks');
// CSS
var sass        = require('metalsmith-sass');
var prefix      = require('metalsmith-autoprefixer');
var bourbon     = require('node-neat').includePaths;
// JS
var uglify     = require('metalsmith-uglify');

Metalsmith(__dirname)
  .source('src')
  .destination('dist')
  // HTML
  .use(branch('content/**/*.md')
    .use(markdown({
      'gfm': true,
      'smartypants': true
    }))
    // Pages
    .use(branch('content/pages/*.html')
      .use(permalinks(':title'))
    )
    .use(layouts({
      'engine': 'jade',
      'directory': 'templates',
      'default': 'default.jade'
    }))
  )
  // CSS
  .use(branch('stylesheets/*.scss')
    .use(sass({
      includePaths: bourbon,
      outputStyle: 'compressed',
      outputDir: 'css/'
    }))
    .use(prefix())
  )
  // JS
  .use(branch('scripts/**/*.js')
    .use(uglify({
      concat: 'js/main.js',
      removeOriginal: true
    }))
  )
  .build(function(err) {
    if (err) throw err;
  });
