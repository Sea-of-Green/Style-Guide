var toggle = $('.toggle');
var guide = $('.style-guide');
var nav = $('.nav');
var container = $('.container');

toggle.addEventListener('click', function() {
  guide.classList.toggle('style-guide--nav');
  nav.classList.toggle('nav--open');
});

container.addEventListener('click', function() {
  if ( guide.classList.contains('style-guide--nav') ) {
    guide.classList.remove('style-guide--nav');
    nav.classList.remove('nav--open');
  }
});

window.addEventListener('resize', function() {
  if ( window.matchMedia('(min-width: 64rem)').matches && guide.classList.contains('style-guide--nav') ) {
    guide.classList.remove('style-guide--nav');
    nav.classList.remove('nav--open');
  }
});
