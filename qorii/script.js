const burgerMenu = document.getElementById('burger-menu');
const burgerNav = document.getElementById('burger-nav');
const closeBtn = document.getElementById('close-btn');

burgerMenu.addEventListener('click', () => {
  burgerNav.style.width = '100vw';
});

closeBtn.addEventListener('click', () => {
  burgerNav.style.width = '0';
});