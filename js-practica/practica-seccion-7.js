//Clases

//Sección 7, video 72
/* const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir(){
        console.log(`Nombre: ${ this.nombre} - edad: ${this.edad}`);
    }
}

//fher.imprimir();

//Está es una forma muy antigua de resolver los problemas

function Persona(nombre, edad) {
    console.log('Se ejecuto esta linea');

    this.nombre = nombre;
    this.edad   = edad;

    this.imprimir = function() {
        console.log(`Nombre: ${ this.nombre} - edad: ${this.edad}`);
    }
    
}

const maria   = new Persona('Maria', 30);
const melissa = new Persona('Melissa', 35);

console.log(maria);

maria.imprimir();
melissa.imprimir(); */

//Sección 7, video 73
class Persona {

    nombre = "";
    codigo = "";
    frase  = "";

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        this.codigo = codigo;
        this.nombre = nombre;
        this.frase  = frase;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
        
    }

    miFrase() {
        this.quienSoy();
        console.log(`Y mi frase es ${this.frase}`);
    }

}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
const ironman   = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');
console.log( spiderman );
console.log( ironman );

spiderman.miFrase();
ironman.miFrase();

