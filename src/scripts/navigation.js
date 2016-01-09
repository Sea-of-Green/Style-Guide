var footerPos = $('.footer').getBoundingClientRect().top;
var winHeight = window.innerHeight;
var nav = $('.nav');

if ( window.matchMedia("(min-width: 40rem)") ) {
  if (footerPos < winHeight) nav.style.height = footerPos + 1 + 'px';
}
