const tabBtns = document.querySelectorAll('.tabbing_btn');
tabBtns.forEach(tabBtn => {
  tabBtn.addEventListener('click', e => {
    const tabContents = document.querySelectorAll('.tabbing_content');
    tabContents.forEach(tabC => {
      tabC.classList.remove('active');
    });
    const tabNum = e.target.dataset.tab;
    const tabContent = document.querySelector(`.tabbing_content--${tabNum}`);
    tabContent.classList.add('active');
  });
});
