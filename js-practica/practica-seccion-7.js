const fher = {
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
melissa.imprimir();



