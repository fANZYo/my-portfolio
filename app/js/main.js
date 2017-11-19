(function () {
  const navList = document.querySelector('.navbar__list');
  const hamburger = document.querySelector('.navbar__hamburger');

  function toggleCollapse(event) {
    navList.classList.toggle('js-collapse');
  }

  hamburger.addEventListener('click', toggleCollapse);
}());
