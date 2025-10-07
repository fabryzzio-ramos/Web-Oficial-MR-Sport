
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

// 🔧 Configura con tus credenciales (debe ser el MISMO proyecto que el panel admin)
const firebaseConfig = {
    apiKey: "AIzaSyDQ_hSR8_jdBGRbjIj8SlJN4ClqWBYxAiM",
    authDomain: "mr-sport-87de8.firebaseapp.com",
    projectId: "mr-sport-87de8",
    storageBucket: "mr-sport-87de8.firebasestorage.app",
    messagingSenderId: "463765364811",
    appId: "1:463765364811:web:6a848bc771e5d5eccaedce",
    measurementId: "G-PRSNCD2XFD"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ⚽ Imagen de Jugadores (agrega los que tengas)
const imagenJugadores = {
    "Joan Garcia": "img/jugador-joan_garcia.webp",
    "Messi": "img/jugador-messi.webp",
    "Neymar": "img/jugador-neymar.webp",
    "Lamine Yamal": "img/jugador-yamal.webp",
    "Rashford": "img/jugador-rashford.webp"
};

// 📸 Imagen por defecto si no hay coincidencia
const imagenPorDefecto = "img/jugador-default.webp";

// 📅 Función principal
async function cargarJugadores() {
try {
    const snapshot = await getDocs(collection(db, "jugadores"));

    // Limpia todos los contenedores
    document.querySelectorAll(".grid-jugadores").forEach(div => div.innerHTML = "");
    
    snapshot.forEach(docSnap => {
        const j = docSnap.data();
        const posicion = j.posicion.toLowerCase();

    // Convierte en plural para coincidir con las clases de HTML (ej: "defensa" → "defensas")
        const clase = posicion.endsWith("s") ? posicion : posicion + "s";

        const contenedor = document.querySelector(`.grid-jugadores.${clase}`);

        // 📷 Buscar imagen del jugador en el objeto
        const imagenSrc = imagenJugadores[j.nombre] || imagenPorDefecto;
        
        if (contenedor) {
        contenedor.innerHTML += `
        <div class="jugador">
            <img src="${imagenSrc}" alt="${j.nombre}">
            <span class="dorsal">${j.numero}</span>
            <div class="info">
                <h4>${j.nombre}</h4>
                <p>${j.posicion.charAt(0).toUpperCase() + j.posicion.slice(1)}</p>
                <span class="numero">#${j.numero}</span>
            </div>
        </div>
        `;
        }
    });
} catch (error) {
    console.error("Error al cargar jugadores:", error);
    }
}
document.addEventListener("DOMContentLoaded", cargarJugadores);