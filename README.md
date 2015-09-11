# Sea of Green Starter Kit

This project is a set of files with which to start your [Sea of Green](http://sea-of-green.com) web projects. It includes the baseline Sass files to start a project as well as favicons, logos, and a basic homepage (which is a great start to your <code>HTML</code> as well).

### Logos & Favicons

In the <code>/assets</code> directory, you will find the logos for Sea of Green, [Hands-on Hydro](http://handsonhydro.tumblr.com), and the [Green Member](http://sea-of-green.com/green-members.html) program. All logos & lockups are available as <code>.png</code>s with transparency as well as vector formats (<code>.ai</code> & <code>.svg</code>). There is also an <code>.svg</code> file that contains all Sea of Green & Green Member logos as <code>SVG</code> symbols.

The <code>/dist/images</code> directory contains an ungodly amount of favicons. This is to support a wide array of browsers & mobile devices. The code for all of the favicons is included in the head of the <code>index.html</code> file.

### Stylesheets

Sea of Green uses [Sass](http://sass-lang.com) with [Bourbon](http://bourbon.io) & [Neat](http://neat.bourbon.io) for stylesheets. We use a 6-1 architecture based on [Sass Guidelines](http://sass-guidelin.es/#architecture) with a [BEM](http://bem-info.org) naming scheme. [Gulp](http://gulpjs.com) handles our compilation, compression & concatenation needs (there's a default <code>gulpfile.js</code> located in the root folder).

#### Included Components:

* Typography
* [Buttons](http://codepen.io/lowmess/full/WvYaZG/)
* [Input Bar](http://codepen.io/lowmess/full/waRoeB/)
* Footer

***

### How to View

1. Install [Node](http://nodejs.org) & [Gulp](http://gulpjs.com) globally.
2. Clone repo to your computer.
3. Open Terminal, and navigate to the clone: ```cd clone/folder/here```
4. Run ```npm install```
5. Run ```gulp watch```
6. If a browser window doesn't automatically open, point your browser to the first url that appeared in the terminal after the ```gulp watch``` command was run.
