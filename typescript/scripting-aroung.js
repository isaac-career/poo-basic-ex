"use strict";
let disney;
disney = 'star wars';
console.log(disney);
disney = 15000000;
console.log(disney);
disney = true;
console.log(disney);
//////////////////////////////////////
let interMiami = 3;
let fcDallas = 2;
let messi = 1;
let juegaMessi = true;
let palabras = "vamo Messi";
jugar(interMiami, fcDallas, juegaMessi);
function jugar(equipo1, equipo2, juegaMessi) {
    let motivo = '';
    if (juegaMessi) {
        equipo1 += 1;
        motivo = 'porque juega messi';
    }
    if (equipo1 > equipo2)
        console.log(`gana Inter Miami ${motivo}`);
    if (equipo1 == equipo2)
        console.log('empatan');
    if (equipo1 < equipo2)
        console.log('gana fc Dallas');
}
palabras.charAt(1);
////////////////////////////////////////////////////
let estudiasteJs = false;
if (estudiasteJs) {
    console.log('continua viendo el video');
}
else {
    console.log('primero necesitas ver el curso ');
}
