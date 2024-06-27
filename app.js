const hamMenu = document.querySelector(".nav__hamburguer");
const offScreenMenu = document.querySelector(".nav__off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});

