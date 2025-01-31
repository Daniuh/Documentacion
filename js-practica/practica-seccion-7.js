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

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log(this.nombre); //Va a dar undefined
        console.log('Hola a todos soy un métoo estático');
    }

    nombre = "";
    codigo = "";
    frase  = "";
    comida = "";

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        this.codigo = codigo;
        this.nombre = nombre;
        this.frase  = frase;

        Persona._conteo++; //Forma correcta de hacer el conteo de las instancias...
    }

    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
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

//console.log( ironman );

spiderman.miFrase();
//ironman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tía May';
//console.log( spiderman );

//Persona._conteo = 2; //Forma poco útil de hacer el conteo de instancias
console.log('Conteo estático', Persona._conteo);
console.log('Instancias: ', Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = 'Soy una propiedad externa'; //No es bueno crear propiedades fuera de la clase

console.log(Persona.propiedadExterna);

