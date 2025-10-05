    const noticias = [
    { titulo: "Clásico nacional deja un empate con sabor a victoria", descripcion: "El partido más esperado terminó igualado, pero dejó emociones hasta el último minuto.", imagen: "img/noticia-entrenamiento.webp"},
    { titulo: "El nuevo goleador del torneo sorprende a todos", descripcion: "Con solo 19 años, ya lidera la tabla de máximos artilleros.", imagen: "img/noticia-entrenamiento.webp"},
    { titulo: "El equipo revelación continúa invicto", descripcion: "Contra todo pronóstico, el club sigue sin conocer la derrota en el campeonato.", imagen: "img/noticia-entrenamiento.webp"},
    { titulo: "Entrenador histórico anuncia su retiro", descripcion: "Tras 25 años de carrera, el técnico se despide dejando un legado impresionante.", imagen: "img/noticia-proximo-rival.webp"},
    { titulo: "Final de la copa regional se define por penales", descripcion: "Un encuentro dramático que coronó al nuevo campeón local.", imagen: "img/noticia-proximo-rival.webp"},
    { titulo: "La selección se prepara para las eliminatorias", descripcion: "Los convocados ya entrenan bajo la dirección del nuevo DT.", imagen: "img/noticia-proximo-rival.webp"},
    { titulo: "El regreso del ídolo al club que lo vio nacer", descripcion: "El delantero firma contrato por dos temporadas.", imagen: "img/noticia-victoria.webp"},
    { titulo: "Derrota inesperada en casa", descripcion: "El puntero del torneo cayó ante un rival que venía último.", imagen: "img/noticia-victoria.webp"},
    { titulo: "Nuevo récord de asistencia en el estadio nacional", descripcion: "Más de 60,000 aficionados llenaron las gradas para alentar a su equipo.", imagen: "img/noticia-victoria.webp"},
    { titulo: "Jugador extranjero se convierte en figura del torneo", descripcion: "Su rendimiento ha sido clave para el éxito del equipo.", imagen: "img/noticia-victoria.webp"}
];

let visibles = 8; // Número inicial de noticias visibles
const contenedorNoticias = document.getElementById("noticias");
const btnVerMas = document.getElementById("btnVerMas");

function mostrarNoticias() {
    contenedorNoticias.innerHTML = ""; // limpia el contenedor antes de volver a cargarlo
    noticias.slice(0, visibles).forEach(noticia => {
        contenedorNoticias.innerHTML += `
        <article class="tarjeta fade-in">
            <img src="${noticia.imagen}" alt="${noticia.titulo}">
            <h3>${noticia.titulo}</h3>
            <p>${noticia.descripcion}</p>
        </article>
        `;
    });

    if (visibles >= noticias.length) {
        btnVerMas.style.display = 'none'; // Oculta el botón si no hay más noticias
    } 
}

btnVerMas.addEventListener('click', () => {
    visibles += 3;
    mostrarNoticias();
});

// Mostrar las noticias iniciales
mostrarNoticias();