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
/* class Persona {

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

console.log(Persona.propiedadExterna); */

//Sección 7, video 77
/* class Persona {

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

class Heroe extends Persona {
    clan = 'Sin clan';

    constructor(nombre, codigo, frase) {
        
        super(nombre, codigo, frase);
        
        this.clan = 'The Avengers';
    }

    quienSoy() {
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }
}

const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');

console.log(spiderman);
spiderman.quienSoy();
 */

//Sección 7, video 78
//esnext.js
/* class Rectangulo {
    
    #area = 0;

    constructor(base = 0, altura = 0) {
        this.base   = base;
        this.altura = altura;

        this.#area = base * altura;
    }

    calcularArea() {
        console.log(this.#area * 2);
    }
}

const rectangulo = new Rectangulo(10, 15);

rectangulo.calcularArea();

console.log(rectangulo);
 */

//Singleton

//Sección 7, video 79
/* class Singleton {
    
    static instancia; //Undefined
    nombre = '';

    constructor(nombre = '') {

        if (!!Singleton.instancia){
            return Singleton.instancia;
        }
        Singleton.instancia = this;
        this.nombre = nombre;
    }

}

const instancia = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('Blacpanther');

console.log(`Nombre en la instancia es: ${instancia.nombre}`);
console.log(`Nombre en la instancia es: ${instancia2.nombre}`);
console.log(`Nombre en la instancia es: ${instancia3.nombre}`); */

//Pro tips

//Sección 7, video 80
class Persona {

    static porObjecto( {nombre, apellido, pais} ) {
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais){

        this.nombre   = nombre;
        this.apellido = apellido;
        this.pais     = pais;
    }

    getInfo(){
        console.log(`Info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}

const nombre1   = 'Melissa',
      apellido1 = 'Flores',
      pais1     = 'Colombia';

const fher = {
    nombre:   'Daniel',
    apellido: 'Naranjo',
    pais:     'Colombia'
}

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjecto(fher);

persona1.getInfo();
persona2.getInfo();
