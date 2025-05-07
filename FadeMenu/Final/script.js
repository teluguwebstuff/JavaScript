const navbar = document.querySelector('.navbar');

function eventHandler(e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const currentEle = e.target;
    const siblings = currentEle
      .closest('.nav__links')
      .querySelectorAll('.nav__link');
    const parentEle = currentEle.closest('.navbar');
    const logo = parentEle.querySelector('.logo');
    siblings.forEach(navLink => {
      if (currentEle != navLink) {
        navLink.style.opacity = opacity;
        logo.style.opacity = opacity;
      }
    });
  }
}
navbar.addEventListener('mouseover', e => {
  eventHandler(e, 0.5);
});

navbar.addEventListener('mouseout', e => {
  eventHandler(e, 1);
});
