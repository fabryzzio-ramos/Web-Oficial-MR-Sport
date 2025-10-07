
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

// 🏆 Logos de torneos (puedes agregar más)
const logosTorneos = {
    "Champions League": "img/logo-champions-league.webp",
    "Copa Libertadores": "img/logo-libertadores.webp"
};

// ⚽ Logos de equipos (agrega los que tengas)
const logosEquipos = {
    "MR Sport": "img/logo.png",
    "Levante": "img/logo-levante.webp"
};

// 📅 Función principal
async function cargarPartidos() {
    try {
    const querySnapshot = await getDocs(collection(db, "partidos"));
    const partidos = [];
    querySnapshot.forEach(doc => partidos.push(doc.data()));
    mostrarPartidos(partidos);
    } catch (error) {
    console.error("Error cargando los partidos:", error);
    }
}

function mostrarPartidos(partidos) {
    const meses = [
    "2025-enero", "2025-febrero", "2025-marzo", "2025-abril",
    "2025-mayo", "2025-junio", "2025-julio", "2025-agosto"
    ];

    meses.forEach(mes => {
    const seccion = document.getElementById(mes);
    if (!seccion) return;
    const contenedor = seccion.querySelector(".grid-partidos");
    contenedor.innerHTML = "";

    const filtrados = partidos.filter(p => p.mes === mes);

    filtrados.forEach(p => {
        const logoTorneo = logosTorneos[p.torneo] || "img/default.webp";
        const logoLocal = logosEquipos[p.local] || "img/default.webp";
        const logoVisitante = logosEquipos[p.visitante] || "img/default.webp";

        contenedor.innerHTML += `
        <div class="partido">
            <div class="fecha"><span>${p.fecha}</span></div><hr class="separador">
            <div class="torneo">
                <img src="${logoTorneo}" alt="${p.torneo}">
            </div><hr class="separador">
            <div class="jornada"><span>${p.jornada}</span></div><hr class="separador">
            <div class="encuentro">
                <div class="local">
                    <span>${p.local}</span>
                    <img src="${logoLocal}" alt="${p.local}">
                </div>
                <span class="versus">VS</span>
                <div class="visitante">
                    <img src="${logoVisitante}" alt="${p.visitante}">
                    <span>${p.visitante}</span>
                </div>
            </div>
        </div>
        <hr class="hr">
        `;
        });
    });
}

cargarPartidos();
