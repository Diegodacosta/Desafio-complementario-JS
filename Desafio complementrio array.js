class Auto {
    constructor(marca, modelo, anio, color, patente) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = parseInt(anio);
        this.color = color;
        this.patente = patente;

    }


}

const autos = [];

let continuar = true;
while (continuar) {
    let ingreso = prompt("Ingrese los datos del auto: marca, modelo, anio, color, patente..Todo separado por una barra diagonal (/) Ingresa X para salir");

    if (ingreso.toUpperCase() == "X") {
        continuar = false;
        break;
    }

    let datos = ingreso.split("/");
    const auto = new Auto(datos[0], datos[1], datos[2], datos[3], datos[4]);
    autos.push(auto);
    console.log(autos);
}


let criterio = prompt("Ingrese el criterio de busqueda: \n 1- marca (de la A a la Z)\n 2- modelo (de la A a la Z)\n 3- anio(mas viejo a mas nuevo)\n 4- color (de la A a la Z)\n 5- patente (de la A a la Z)");

function ordenar(criterio, array) {
    let arrayOrdenado = array.slice(0);

    switch (criterio) {
        case '1':
            return arrayOrdenado.sort((a, b) => a.marca.localeCompare(b.marca));

        case '2':
            return arrayOrdenado.sort((a, b) => a.modelo.localeCompare(b.modelo));

        case '3':
            return arrayOrdenado.sort((a, b) => a.anio - b.anio);

        case '4':
            return arrayOrdenado.sort((a, b) => a.color.localeCompare(b.color));

        case '5':
            return arrayOrdenado.sort((a, b) => a.patente.localeCompare(b.patente));

        default:
            alert("No es un criterio valido");
    }
}


function mostrar(array) {
    let contenido = "";

    array.forEach(elementos => {
        contenido += 'marca:' + elementos.marca + '\nModelo:' + elementos.modelo + '\nanio:' + elementos.anio + '\ncolor:' + elementos.color + '\npatente:' + elementos.patente + '\n\n';

    });
    return contenido;

    alert(mostrar(ordenar(criterio, autos)));
}

let marcaElegido = prompt("Ingrese la marca elegida y le mostaremos los autos que tengan esa marca");
let arrayFiltrado = autos.filter((auto) => auto.marca.toLowerCase().includes(marcaElegido.toLowerCase()));

if (arrayFiltrado.length == 0) {
    alert("No hay autos de esa marca");
} else {
    const filtrados = arrayFiltrado.map(auto => auto.modelo);
    alert("Los autos de la marca " + marcaElegido + " son: " + filtrados.join('\n'));
}