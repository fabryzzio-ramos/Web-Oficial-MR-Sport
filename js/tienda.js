// Selecciona todos los elementos del menú principal
const menuItems = document.querySelectorAll(".menu-item");
const submenus = document.querySelectorAll(".submenu-equipaciones, .submenu-entrenamiento, .submenu-moda, .submenu-accesorios");

// Función para ocultar todos los submenús
function ocultarSubmenus() {
    submenus.forEach(sub => sub.style.display ="none");
    menuItems.forEach(item => item.classList.remove("active"));
}

// Agregar evento de mouse o click a cada item del menú
menuItems.forEach(item => {
    const link = item.querySelector(".menu-link");

    link.addEventListener("mouseenter", () => {
        const target = link.textContent.trim().toLowerCase();

        // Oculta todos los submenús antes de mostrar uno nuevo
        ocultarSubmenus();

         // Muestra el submenú correspondiente según el texto del link
        if (target.includes("equipacion")){
            document.querySelector(".submenu-equipaciones").style.display ="block";
        } else if (target.includes("entrenamiento")){
            document.querySelector(".submenu-entrenamiento").style.display ="block";
        } else if (target.includes("moda")){
            document.querySelector(".submenu-moda").style.display ="block";
        } else if (target.includes("accesorios")){
            document.querySelector(".submenu-accesorios").style.display ="block";
        }

        item.classList.add("active");
    });
});

// Cierra el submenú si el mouse sale del área general del menú
document.querySelector('.nav').addEventListener('mouseleave', () => {
    ocultarSubmenus();
});