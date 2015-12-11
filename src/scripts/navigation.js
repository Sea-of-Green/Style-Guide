// Initialize smoothScroll
smoothScroll.init();

// Navigation
var nav       = $('.nav');
var navButton = $('.nav__button');
var content   = $('.style-guide');
var navLinks  = $$('.nav__link a');

var toggleNav = function () {
  // Toggle links
  nav.classList.toggle('nav--open');
  // Move content
  content.classList.toggle('style-guide--closed');
};

// Toggle navigation when hamburger button is clicked
navButton.addEventListener( 'click', function () {
  toggleNav();
});

// Toggle navigation when navigation link is clicked
for ( i =0; i < navLinks.length; i++ ) {
  navLinks[i].addEventListener( 'click', function () {
    toggleNav();
  });
}
