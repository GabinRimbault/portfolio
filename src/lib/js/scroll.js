export function scrollToAnchor() {
  var links = document.querySelectorAll('a[href^="#"]');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event) {
      event.preventDefault();

      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        var targetOffset = target.offsetTop;
        window.scrollTo({
          top: targetOffset,
          behavior: 'smooth'
        });
      }
    });
  }
}
