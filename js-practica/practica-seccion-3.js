//Practica con arreglos

//Sección 3, video 23
/*
let videoJuegos = [ 'Valorant', 'League of Legends', 'Mario 3', ];
console.log({ videoJuegos });

console.log(videoJuegos[0]);


let arregloCosas = [
    true,
    123,
    'Daniel',
    1 + 2,
    [ 'Galio', 'Irelia', 'Mordekaiser', [
        'Graves',
        'Ashe',
        'Miss Fortune',
    ] ],
];

console.log({ arregloCosas });
console.log(arregloCosas[4][3][1]);
*/

//Sección 3, video 24 
/*
let juegos = [ 'Lego', 'Uno', 'Rummy', 'Parques' ];
console.log('Largo: ', juegos.length);

let primero = juegos[0];
let ultimo  = juegos[ juegos.length - 1 ];
console.log('Primero: ', primero ,'último: ', ultimo);

juegos.forEach((elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
});

let nuevaLongitud = juegos.push('Ajedrez');
console.log({ nuevaLongitud, juegos });

nuevaLongitud =juegos.unshift('Damas');
console.log({ nuevaLongitud, juegos });

let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });

let pos = 1;

let juegosBorrados = juegos.splice(pos, 2);
console.log({ juegosBorrados, juegos });

let rummyIndex = juegos.indexOf('Rummy');
console.log({ rummyIndex });
*/


//Practica con objetos literales

//Sección 3, video 25
/*
let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        log: -118.70
    },
    trajes: [ 'Mark I', 'Mark V', 'Hulkbuster' ],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California',
    },
    'ultima-Pelicula': 'End game', //Si se desea utilizar caracteres especiales para nombrar metodos en un objeto literal.
};

console.log(personaje);
console.log('Nombre', personaje.nombre );
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);
console.log('Coors', personaje.coords.lat);
console.log('No. Trajes', personaje.trajes.length);
console.log('Último traje', personaje.trajes[ personaje.trajes.length - 1 ]);

const x = 'vivo';
console.log('Vivo', personaje[x] );

console.log('Última Película', personaje["ultima-Pelicula"]);

delete personaje.edad;

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

Object.freeze(personaje);

personaje.dinero = 100000000000000;
personaje.casado = false;

personaje.direccion.ubicacion = 'Costa Rica';

console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores     = Object.values(personaje);
console.log(propiedades, valores);
*/


//Practica con funciones básicas y de flecha

//Sección 3, video 27 - 28
/*
function saludar(nombre) {
    console.log(arguments); 
    console.log('Hola ' + nombre);
    return [ 1, 2, 3, 4, 5, 6 ];

    //Esto nunca se va a ejecutar
    console.log('Soy un código que está después del return');
}

const retornoSaludar = saludar( 'Daniel', 40, true, 'Costa Rica' );
console.log(retornoSaludar);

const saludar2 = function(nombre) { //Función Anonima
    console.log('Hola ' + nombre);
}

saludar2( 'Daniel' );

const saludarFlecha = () => {
    console.log('Hola flecha');
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre );
}

saludarFlecha();
saludarFlecha2('Roberta');

function sumar(a, b) {
    return a + b;
}

const sumar2 = (a, b) => {
    return a + b;
}

const sumar3 = (a, b) =>  a + b;

console.log(sumar(1, 2));
console.log(sumar2(3, 5));
console.log(sumar3(7, 5));

function getAleatorio() {
    return Math.random();
}

console.log(getAleatorio());

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());
*/


//Pro Tips 1

//Sección 3, video 29
/*
function crearPersona(nombre, apellido) {
    return {
        nombre,
        apellido
    };
}

const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona('Daniel', 'Naranjo');
console.log(persona);

const { apellido: nuevoApellido } = crearPersona('Daniel', 'Naranjo');
console.log({ nuevoApellido });

function imprimeArgumentos() {
    console.log(arguments);
}

const imprimeArgumentos2 = (...args) => {
    //console.log(args)
    return args;
}

imprimeArgumentos(10, true, false, 'Daniel');

const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, false, 'Daniel');
console.log({ casado, vivo, nombre, saludo });

let tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: [ 'Mark I', 'Mark V', 'Hulkbuster' ],
};

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {

    console.log({ nombre }),
    console.log({ codeName }),
    console.log({ vivo }),
    console.log({ edad }),
    console.log({ trajes });
}

imprimePropiedades(tony);
*/
