# Contributing

As this is a *living* style guide, contributions & corrections from Sea of Green employees are welcome & encouraged. All text in this style guide should be written in accordance with the [Sea of Green voice](//style.sea-of-green.com/text/voice).

***

## Source Control

To add or edit content, create a new branch with your name and the addition or fix as the branch name (e.g., Add-Product-Descriptions). Then make the changes and submit a pull request. Easy as pie!

#### Coding Best Practices

We side firmly on the 'spaces' side of the [tabs-vs-spaces debate](https://www.google.com/search?q=tabs+or+spaces), with two spaces being the appropriate level of indentation.

This project does not use jQuery, so all JavaScript should be vanilla. However, there are two global functions that ape the functions of the jQuery selector: ```$()``` which returns a ```document.querySelector``` call, and a ```$$()``` which returns a ```document.querySelectorAll```.

Our Sass follows the [Sass Guidelines](http://sass-guidelin.es/). In addition, all CSS rules are organized by type in the following order:

1. Sass Mixins and Extends
2. Positioning (```position```, ```top```, ```z-index```, etc.)
3. Width & Height
4. Box Model (```padding```, ```border```, ```margin```)
5. Backgrounds
6. Type
7. Animations and Transitions
8. ```@media``` Queries
9. Nesting and BEMing

An exception can be made for ```@media``` queries (or the ```respond-to``` mixin), which can be placed near a rule or set of rules if it changes the nearby rule. For example:

```
// Good:
.selector {
  display: block;

  height: 200px;
  width: 500px;
  @include respond-to(medium) {
    height: 300px;
    width: 750px;
  }

  padding: $gutter;
  margin: 0 auto;
}

// Bad:
.selector {
  display: block;

  height: 200px;
  width: 500px;
  @include respond-to(medium) {
    display: absolute;

    padding: $gutter * 2;
  }

  padding: $gutter;
  margin: 0 auto;
}

// Good Again:
.selector {
  display: block;

  height: 200px;
  width: 500px;

  padding: $gutter;
  margin: 0 auto;

  @include respond-to(medium) {
    display: absolute;
    top: 10px;

    padding: $gutter * 2;
  }
}
```

***

## Reporting Bugs or Requesting Content

If you are uncomfortable or unable to edit or add content yourself, or wish to report a visual or technical bug, the [issues tracker](/issues) should be used.
