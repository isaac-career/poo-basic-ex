"use strict";
let interMiami = 2;
let fcDallas = 2;
let messi = 1;
let juegaMessi = true;
jugar(interMiami, fcDallas, juegaMessi);
function jugar(equipo1, equipo2, juegaMessi) {
    if (juegaMessi)
        equipo1 += 1;
    if (equipo1 > equipo2)
        console.log('gana Inter Miami');
    if (equipo1 == equipo2)
        console.log('empatan');
    if (equipo1 < equipo2)
        console.log('gana fc Dallas');
}
////////////////////////////////////////////////////
let estudiasteJs = false;
if (estudiasteJs) {
    console.log('continua viendo el video');
}
else {
    console.log('primero necesitas ver el curso ');
}
