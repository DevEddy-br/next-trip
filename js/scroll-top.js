document.addEventListener('DOMContentLoaded', function () {
  const scrollTopButton = document.querySelector('.scroll-top');
  const headerSection = document.querySelector('section.hero, section.hero-travel-packages');

  if (!scrollTopButton || !headerSection) {
    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          scrollTopButton.classList.add('visible');
        } else {
          scrollTopButton.classList.remove('visible');
        }
      });
    },
    {
      root: null,
      threshold: 0,
      rootMargin: '-32px 0px 0px 0px'
    }
  );

  observer.observe(headerSection);
});
