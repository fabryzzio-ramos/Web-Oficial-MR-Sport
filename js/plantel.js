const jugadores = [

    //Porteros
    { nombre: "Joan García", posicion: "portero", numero: 1, imagen: "img/jugador-joan_garcia.webp" },

    //Defensores
    { nombre: "Diego González", posicion: "defensor", numero: 2, imagen: "img/jugador-neymar.webp" },
    { nombre: "Carlos López", posicion: "defensor", numero: 3, imagen: "img/jugador-neymar.webp" },
    { nombre: "Miguel Sánchez", posicion: "defensor", numero: 4, imagen: "img/jugador-neymar.webp" },

    //Mediocampistas
    { nombre: "Luis Martínez", posicion: "centrocampista", numero: 5, imagen: "img/jugador-yamal.webp" },
    { nombre: "Javier Rodríguez", posicion: "centrocampista", numero: 6, imagen: "img/jugador-yamal.webp" },
    { nombre: "Andrés Pérez", posicion: "centrocampista", numero: 7, imagen: "img/jugador-yamal.webp" },

    //Delanteros
    { nombre: "Fernando Torres", posicion: "delantero", numero: 8, imagen: "img/jugador-rashford.webp" },
    { nombre: "Sergio Gómez", posicion: "delantero", numero: 9, imagen: "img/jugador-rashford.webp" },
    { nombre: "Raúl Jiménez", posicion: "delantero", numero: 10, imagen: "img/jugador-rashford.webp" },

    //Cuerpo Técnico
    { nombre: "Carlos Hernández", posicion: "entrenador", numero: "", imagen: "img/jugador-messi.webp" },
    { nombre: "Miguel Ramírez", posicion: "entrenador", numero: "", imagen: "img/jugador-messi.webp" },
];

function mostrarPorPosicion(posicion) {
    const seccion = document.getElementById(posicion);
    if (!seccion) return;

    const contenedor = seccion.querySelector(".grid-jugadores");
    // vacía el contenedor antes de volver a cargarlo
    contenedor.innerHTML = "";

    //filtra los jugadores por posición
    const filtrados = jugadores.filter(j => j.posicion === posicion);

    filtrados.forEach(j => {
        contenedor.innerHTML += `
        <div class="jugador">
            <img src="${j.imagen}" alt="${j.nombre}">
            <span class="dorsal">${j.numero}</span>
            <div class="info">
                <h4>${j.nombre}</h4>
                <p>${j.posicion.charAt(0).toUpperCase() + j.posicion.slice(1)}</p>
                <span class="numero">#${j.numero}</span>
            </div>
        </div>
        `;
    });
}
// Mostrar todos los jugadores al cargar la página
["portero", "defensor", "centrocampista", "delantero", "entrenador"].forEach(pos => {
    mostrarPorPosicion(pos);
});

// Código para el menú hamburguesa
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('show');
});