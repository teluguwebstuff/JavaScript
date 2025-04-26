const scrollBtn = document.querySelector('.scroll-btn--1');
const section2 = document.querySelector('.section--2');

scrollBtn.addEventListener('click', () => {
  const scords = section2.getBoundingClientRect();
  // console.log(window.pageXOffset);
  // console.log(window.pageYOffset);
  // window.scrollTo({
  //   left: 0,
  //   top: scords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  section2.scrollIntoView({ behavior: 'smooth' });
});

// Both Left & x are same (0)
// Both Top & y are same
// Bottom
// 626 height + top => 429 + 196
