# Initialize smoothScroll
smoothScroll.init();

# Navigation
nav       = $('.nav')
navButton = $('.nav__button')
content   = $('.style-guide')
navLinks  = $$('.nav__link a')

toggleNav = ->
  # Toggle links
  nav.classList.toggle('nav--open')
  # Move content
  content.classList.toggle('style-guide--closed')
  return

# Toggle navigation when hamburger button is clicked
navButton.addEventListener "click", (e) ->
  toggleNav()
  return

# Toggle navigation when navigation link is clicked
for link in navLinks
  link.addEventListener 'click', (e) ->
    toggleNav()
    return
