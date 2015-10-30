// Send newsletter signup to Mailchimp
function newsletterSignup() {
  var email = document.getElementById('footer__newsletter-signup-input').value;
  var link = "http://sea-of-green.us7.list-manage2.com/subscribe?u=fdddde00588b5c6e72568d831&id=878c26efbd&MERGE0=";
  window.location.replace(link+email);
}

// Add Year to Copyright
var year = new Date().getFullYear();
document.getElementById('footer__copyright-year').innerHTML = year;

// Add 'utm_source=sea-of-green' to external links
var ref = "utm_source=sea-of-green&utm_medium=referral";
var links = document.getElementsByTagName('a');
for (i = 0; i < links.length; i++) {
  var a = new RegExp('/' + window.location.host + '/');
  if (!a.test(links[i].href) && links[i].href.search("sea-of-green") == -1) {

    var link = links[i].href;

    if (link.search("#") != -1) {

      var linkParts = link.split("#"),
          anchor = linkParts.pop(),
          linkParts = linkParts.pop(),
          link = linkParts.toString().replace(",", "");

      if (link.search("/?") != -1 && link.search("=") != -1) {
        links[i].href = link + '&' + ref + "#" + anchor;
      } else {
        links[i].href = link + '?' + ref + "#" + anchor;
      }

    } else {

      if (link.search("/?") != -1 && link.search("=") != -1) {
        links[i].href += '&' + ref;
      } else {
        links[i].href += '?' + ref;
      }

    }
  }
}

// Navigation
var nav       = document.querySelector('.nav'),
    navButton = document.querySelector('.nav__button'),
    content   = document.querySelector('.style-guide');

navButton.onclick = function() {
  nav.classList.toggle('nav--open'); // Show links
  content.classList.toggle('style-guide--closed'); // Move content
}
