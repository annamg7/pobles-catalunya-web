const boton = document.getElementById("boto-menu");
const submenu = document.getElementById("submenu");
const contenedor = boton.parentElement; // <li> que contiene el menú

contenedor.addEventListener("mouseenter", () => {
    submenu.style.display = "block";
});

contenedor.addEventListener("mouseleave", () => {
    submenu.style.display = "none";
});