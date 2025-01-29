//Valor, referencia y romper la referencia

//Sección 4, video 33
/*
let a = 10;
let b = 10;
a = 30;

console.log({ a, b });

let juan = { nombre : 'Juan' };
let ana  = { ...juan }; //Forma correcta
//let ana  = juan; Forma incorrecta
ana.nombre = 'Ana';

console.log({ juan, ana });

const cambiaNombre = ({ ...persona }) => { //... no es lo mismo dentro de las llaves
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre(peter);

console.log({ peter, tony });

// Con arreglos

const frutas = [ 'Manzana', 'Pera', 'Piña' ];
// const otrasFrutas = [ frutas ]; Forma incorrecta (Se usa el mismo espacio de memoria)
const otrasFrutas = [ ...frutas ]; //Forma correcta para separar los arreglos
// const otrasFrutas = frutas.slice() ; Otra forma de utilizarlo, depende de la situación.
otrasFrutas.push('Mango');

// console.time() sirve para medir el rendimiento en js

console.table({ frutas, otrasFrutas });
*/


//If y Else

//Sección 4, video 34
/*
let a = 5;

if(a > 10) {
    console.log('A es mayor que 10');
} else {
    console.log('A es menor que 10');
}

console.log('Fin del programa');


const hoy = new Date();

let dia = hoy.getDay();

console.log(dia);

if (dia === 0) {
    console.log('Es domingo');
} else {
    console.log('No es domingo');
}

//Laboratorio para imprimir el día sin necesidad dd if o swicht
dia = 10;

const diasLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado',
}

console.log(diasLetras[dia] || 'Día no definido' );

const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado',];

console.log(dias[dia] );
*/


//Lógica booleana

//Sección 4, video 36
/*
const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negación');
console.log(true);
console.log(!true); //false
console.log(!false); //true

console.log(!regresaFalse());

console.warn('And');

console.log(true && true);
console.log(true && !false); //true

console.log('----------------------');
console.log( regresaFalse() && regresaTrue());

console.warn('OR');
console.log(true || false);
console.log(false || false);

console.log(regresaFalse() || regresaTrue());

console.warn('Asignaciones'); 

const soyUndefined = undefined;
const soyNull      = null;
const soyFalso     = false;

const a1 = false && 'Hola mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy un falso de nuevo';
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy un falso de nuevo';


console.log({ a1, a2, a3, a4, a5 });
*/


//Operador condicional ternario

//Sección 4, video 38
/*

//   Días de semana abrimos a las 11,
//   pero los fines de semana abrimos a las 9
 
// //Entra a un sitio web, para consultar si está abierto hoy...

const dia = 0;
const horaActual = 5;

let horaApertura;
let mensaje;

//if(dia === 0 || dia === 6) {
// if ([ 0,6 ].includes(dia)) {
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Día de semana');
//     horaApertura = 11;
// }

horaApertura = ([ 0,6 ].includes(dia)) ? 9 : 11;

// if (horaActual >= horaApertura) {
//     mensaje = 'Está abierto';
// } else {
//     mensaje = `Está cerrado, hoy abrimos a las ${ horaApertura}`;
// }

mensaje = (horaActual >= horaApertura) ? 'Está abierto' : `Está cerrado, hoy abrimos a las ${ horaApertura }`;

console.log({ horaApertura, mensaje });

console.warn('Pro tip - ternario');

const elMayor = (a, b) => (a > b) ? a : b;

const tieneMembresia = (miembro) => (miembro) ? '2 Dólares' : '10 Dólares'; 

console.log(tieneMembresia(false));
console.log(elMayor(20, 15));

const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    //(() => 'Nick Fury')() //Función anonima auto invocada
    elMayor(10, 15),
];

console.log(amigosArr);

const nota = 100;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C'  : 'F';

console.log({ nota,  grado });
*/


//Swicht

//Sección 4, video 40
/*
const dia = '2';

switch(dia) {
    case '0':
        console.log('Domingo');
        break;
    case '1':
        console.log('Lunes');
        break;
    case '2':
        console.log('Martes');
        break;
    default: 
        console.log('No es lunes, martes o domingo');    
};
*/


//While y Do While

//Sección 4, video 41
/*
console.warn('While');

 const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

 let i = 0;

 while(i < carros.length ) {
    if (i === 1){
        i++
        continue;
    }
    console.log(carros[i]);
    i++;
 }


console.warn('Do While');

let j = 0;
do {
    console.log(carros[j]);
    j++;
} while(carros[j]);
*/


//For - For in - For of

//Sección 4, video 42
/*
const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];
console.warn('For tradicional');

for( let i = 0; i < heroes.length ; i++ ) {
    console.log( heroes[i] ); 
}

console.warn('For in');

for( let i in heroes ) {
    console.log( heroes[i] );  
}

console.warn('For of');

for( let i of heroes ) {
    console.log( i ); 
}
*/






