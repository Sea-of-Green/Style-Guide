var Metalsmith  = require('metalsmith');
var branch      = require('metalsmith-branch');
// HTML
var layouts     = require('metalsmith-layouts');
var markdown    = require('metalsmith-markdown');
var permalinks  = require('metalsmith-permalinks');
var collections = require('metalsmith-collections');
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
  .use(branch('**/*.md')
    .use(collections({
      visuals: {
        pattern: 'content/visuals/**/*.md'
      },
      text: {
        pattern: 'content/text/**/*.md'
      },
      pages: {
        pattern: 'content/*.md'
      }
    }))
    .use(layouts({
      'engine': 'jade',
      'directory': 'templates',
      'default': 'default.jade'
    }))
    .use(markdown({
      'gfm': true,
      'smartypants': true
    }))
    .use(permalinks(':slug'))
  )
  // CSS
  .use(branch('stylesheets/**/*.scss')
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
