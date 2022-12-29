const menuBtn = document.querySelector('.menu-btn');
const navbarLinks = document.querySelector('.navbar-links');

menuBtn.addEventListener('click', () => {
  navbarLinks.classList.toggle('show');
});