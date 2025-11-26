 export const buscarElemento = (lista, elemento) => {

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            return true;   // Si lo encuentra, termina la función
        }
    }

    return false; // Si recorrió todo y no lo encontró
};

