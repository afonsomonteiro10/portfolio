const hamburger = document.querySelector('.hamburger');
const navLinksMobile = document.querySelector('.nav-links-mobile');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinksMobile.classList.toggle('active');
});