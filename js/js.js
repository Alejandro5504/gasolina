const TURISMOS = document.getElementById("turismos");
const TODOTERRENOS = document.getElementById("todoterrenos");
const CTURISMOS = document.getElementById("combustiblet");
const  CTTERRENOS = document.getElementById("combustiblett");
const RESULTADO = document.getElementById('resultado');


function convertir() {

let turismos = Number(TURISMOS.value);
let todoterrenos = Number(TODOTERRENOS.value);
let cturismos = Number(CTURISMOS.value);
let ctterrenos = Number(CTTERRENOS.value);

let resultado = (turismos * cturismos) + (todoterrenos * ctterrenos); 

RESULTADO.innerHTML="La cantidad de combustible requerido es:" + resultado;

}