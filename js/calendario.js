//Logos de torneos//
const logos = {
    "Champions League": "img/logo-champions-league.webp",
}
//Equipos//
const equipos = {
    "MR Sport": "img/logo.png",
    "Levante": "img/logo-levante.webp",
}
const partidos = [

    //Enero 2025
    { mes: "2025-enero", fecha: "Sab 4 ENE", torneo: "Champions League", jornada: "Jornada 1", local: "MR Sport", visitante: "Levante"},
    { mes: "2025-enero", fecha: "Dom 12 ENE", torneo: "Champions League", jornada: "Jornada 2", local: "Levante", visitante: "MR Sport"},
    { mes: "2025-enero", fecha: "Sab 18 ENE", torneo: "Champions League", jornada: "Jornada 3", local: "MR Sport", visitante: "Levante"},
    { mes: "2025-enero", fecha: "Dom 26 ENE", torneo: "Champions League", jornada: "Jornada 4", local: "Levante", visitante: "MR Sport"},

    //Febrero 2025
    { mes: "2025-febrero", fecha: "Sab 7 FEB", torneo: "Champions League", jornada: "Jornada 5", local: "Levante", visitante: "MR Sport"},
    { mes: "2025-febrero", fecha: "Dom 15 FEB", torneo: "Champions League", jornada: "Jornada 6", local: "MR Sport", visitante: "Levante"},
    { mes: "2025-febrero", fecha: "Sab 21 FEB", torneo: "Champions League", jornada: "Jornada 7", local: "Levante", visitante: "MR Sport"},
    { mes: "2025-febrero", fecha: "Dom 29 FEB", torneo: "Champions League", jornada: "Jornada 8", local: "MR Sport", visitante: "Levante"},
]

function mostrarPorMes(mes) {
    const seccion = document.getElementById(mes);
    if (!seccion) return;

    const contenedor = seccion.querySelector(".grid-partidos")
    // vacía el contenedor antes de volver a cargarlo
    contenedor.innerHTML = "";

    //filtra los partidos por mes
    const filtrados = partidos.filter(p => p.mes === mes);

    filtrados.forEach(p => {
        contenedor.innerHTML += `
        <div class="partido">
            <div class="fecha">
                <span>${p.fecha}</span>
            </div>
            <div class="torneo">
                <img src="${logos[p.torneo]}" alt="${p.torneo}">
            </div>
            <div class="jornada">
                <span>${p.jornada}</span>
            </div>
            <div class="encuentro">
                <div class="local">
                    <span>${p.local}</span>
                    <img src="${equipos[p.local]}" alt="">
                </div>
                <span class="versus">VS</span>
                <div class="visitante">
                    <img src="${equipos[p.visitante]}" alt="">
                    <span>${p.visitante}</span>
                </div>
            </div>
        </div>
        `;
    });
}
//Mostrar todos los partidos al cargar la página
["2025-enero", "2025-febrero", "2025-marzo", "2025-abril", "2025-mayo", "2025-junio", "2025-julio", "2025-agosto"].forEach(mes => {
    mostrarPorMes(mes);
});