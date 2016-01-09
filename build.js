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
  // CSS
  .use(sass({
    includePaths: bourbon,
    outputStyle: 'compressed',
    outputDir: 'css/'
  }))
  .use(prefix())
  // JS
  .use(uglify({
    concat: 'js/main.js',
    removeOriginal: true
    }))
  // HTML
  .use(collections({
    visuals: {
      pattern: 'visuals/**/*.md'
    },
    text: {
      pattern: 'text/**/*.md'
    },
    pages: {
      pattern: '*.md'
    }
  }))
  .use(markdown({
    gfm: true,
    smartypants: true,
    tables: true
  }))
  .use(layouts({
    engine: 'jade',
    directory: 'templates',
    default: 'default.jade',
    pattern: '**/*.html'
  }))
  .use(permalinks({
    pattern: ':collection/:slug',
    relative: false,
    linksets: [{
      match: { collection: 'pages' },
      pattern: ':slug',
    }]
  }))
  .build(function(err) {
    if (err) throw err;
  });
