var toggle = $('.toggle');
var guide = $('.style-guide');
var nav = $('.nav');
var container = $('.container');

toggle.addEventListener('click', function() {
  guide.classList.toggle('style-guide--is-closed');
  nav.classList.toggle('nav--is-open');
});

container.addEventListener('click', function() {
  if ( guide.classList.contains('style-guide--is-closed') ) {
    guide.classList.remove('style-guide--is-closed');
    nav.classList.remove('nav--is-open');
  }
});

window.addEventListener('resize', function() {
  if ( window.matchMedia('(min-width: 64rem)').matches && guide.classList.contains('style-guide--is-closed') ) {
    guide.classList.remove('style-guide--is-closed');
    nav.classList.remove('nav--is-open');
  }
});
