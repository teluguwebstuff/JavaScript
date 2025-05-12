const header = document.querySelector('header');
const sections = document.querySelectorAll('.section');
const callBack = (enteries, oberser) => {
  enteries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
};

const oberser = new IntersectionObserver(callBack, {
  root: null,
  threshold: 0.5,
});

oberser.observe(header);
sections.forEach(section => {
  oberser.observe(section);
});
