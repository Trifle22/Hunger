var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 100,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});

let tab = function () {
  let tabs = 
  document.querySelectorAll('.tab');
  let tabContent = 
  document.querySelectorAll('.tabs-content');
  let tabName;

  tabs.forEach(item => {
    item.addEventListener('click', selectTab);
  });

  function selectTab() {
  tabs.forEach(item => {
    item.classList.remove('is-active');
  });
  this.classList.add('is-active');
  tabName = this.getAttribute('data-tab-name');
  selectTabContent(tabName);
  }
  function selectTabContent(tabName) {
    tabContent.forEach(item => {
      item.classList.contains(tabName) ?
      item.classList.add('is-active') : item.classList.remove('is-active');
    });
  }
};

tab();
