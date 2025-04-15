/* MODAL COMPONENT */
const modelBtn = document.querySelector('.modal_btn');
const closeBtn = document.querySelector('.close_btn');
const overlay = document.querySelector('.overlay');
modelBtn.addEventListener('click', function () {
  overlay.classList.add('active');
});

closeBtn.addEventListener('click', function () {
  overlay.classList.remove('active');
});

overlay.addEventListener('click', function (e) {
  if (e.target === overlay) {
    overlay.classList.remove('active');
  }
});
