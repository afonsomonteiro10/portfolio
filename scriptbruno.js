// Seleciona o ícone e o menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

// Alterna a classe 'active' para mostrar ou esconder o menu
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
