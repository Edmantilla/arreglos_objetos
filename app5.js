import { buscarElemento } from "./modulos/elementos.js";

let cantidad = parseInt(prompt("Ingrese la cantidad de elementos:"));
let arreglo = [];

// Validación simple
if (isNaN(cantidad) || cantidad <= 0) {
    console.log("Cantidad inválida.");
} else {

    // Captura de elementos
    for (let i = 0; i < cantidad; i++) {
        let valor = prompt(`Ingrese el elemento #${i + 1}:`);
        arreglo.push(valor);
    }

    // Elemento a buscar
    let buscado = prompt("Ingrese el elemento que desea buscar:");

    // Uso de la función flecha
    let encontrado = buscarElemento(arreglo, buscado);

    // Mensaje amigable
    if (encontrado) {
        console.log(`El elemento "${buscado}" SÍ se encuentra en el arreglo.`);
    } else {
        console.log(`El elemento "${buscado}" NO se encuentra en el arreglo.`);
    }
}