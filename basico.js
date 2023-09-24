// Este es un comentario en línea.
/* Esto es un
comentario de varias líneas */




/*
var a;
a = 7;
var b = a;

console.log(b);
*/



/*

let a = 7; //creamos una variable y le asignamos el valor 7
let b = a; //pasamos el contenido de nuestra primera variable a b

console.log(b); // imprimimos el resultado

var miNombre = "Gerardo Santana"; // creamos la variable miNombre y le asignamos el valor Gerardo Santana

let miPrimerNombre = "Gerardo"; // creamos variable miPrimerNombre y le asignamos Gerardo
let miPrimerApellido = "Santana";// creamos variable miPrimerApellido y le asignamos Santana

console.log(miPrimerNombre, miPrimerApellido); // imprimimos el resultado
*/





//Variables no Inicializadas 
/*Cuando se declaran variables de JavaScript, tienen un valor inicial de undefined.
Si realiza una operación matemática en una variable undefined, su resultado será NaN, que significa "No es un número". 
Si concatena una cadena con una variable undefined, obtendrá una cadena undefined.*/
/*
var a;
a = 5;
var b;
b = 10;
var c;
c = "soy un";
 a = a + 1;
 b = b + 5;
 c = c + "String!";

 console.log(a,b,c);
*/
 




 
 //Sensibilidad a mayúsculas y minúsculas en variables

 /*En JavaScript, todas las variables y nombres de funciones distinguen entre mayúsculas y minúsculas. Esto significa que las mayúsculas son importantes.
 Ejemplos:*/
 /*
var algunaVariable;
var otroNombreVariable;
var EsteNombreVariableEsMuyLargo;
*/
/*
//creacion de variables
var varMayuscula;
var varCalmelCase;
var otraCamelCase;

//asignamos variables
varMayuscula = 10;
varCalmelCase="A STRING";
otraCamelCase= 9000;

//imprimir contenido
console.log(varMayuscula, varCalmelCase, otraCamelCase);
*/

/*
//Diferencias entre las palabras clave var y let

var campista = "James";
var campista = "David";

console.log(campista);

//no hay error porque el segundo var toma el valor de campista 

let campista = "James";
let campista = "David";

console.log(campista);

//error porque la palabra clave de let no permite este tipo de reemplazos.
*/

//codigo usando var
/*
var nombreGato = "Michi";
var sonidoGato = "Meow!";
 console.log(nombreGato);
 console.log(sonidoGato);
*/
 //codigo usando let

/*
 let nombreGato = "Michi";
 let sonidoGato = "Meow!";
 
 console.log(nombreGato);
 console.log(sonidoGato);
*/



//Declarar una variable de solo lectura con la palabra clave const

/*const tiene todas las increíbles características que permite tener,
con la ventaja adicional de que las variables declaradas usando const son de solo lectura. 
 Son un valor constante, lo que significa que una vez que se asigna una variable con const, 
 no se puede reasignar:
 */



/*
const MASCOTA_FAV = "Gatos";

console.log(MASCOTA_FAV);
*/

//ejemplo codigo usando const y let

/*

const NombreMateria = "Matemáticas";

let comoes = "es impresionante";
comoes = "es asombrosa!";

console.log(NombreMateria, comoes);
*/



//Suma numerica
/*

const miVar = 5 + 10;

console.log(miVar);


const sum = 10+10;
console.log (sum);
*/

//resta numerica

/*
const rest = 14-2;//const variable de solo lectura
console.log(rest);
*/

//multiplicacion
/*
const mult = 8*10;
console.log(mult);
*/

//division 
/*
const div = 4/2;
console.log(div);
*/




//Incrementar un número usando el i++
/*
let miVar = 90;
miVar++;

console.log(miVar);
*/

//restar
/*
let miVar = 90;
miVar = miVar-1;

console.log(miVar);
*/


//Establece el residuo de  11 dividido por 3 utilizando el operador de residuo 
/*
const residuo = 11 % 3;
console.log(residuo);
*/
/*
//Asignación compuesta con suma aumentada
let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;

console.log(a, b, c);
*/

//normal

/*
let a = 3;
let b = 17;
let c = 12;

a = a + 12;
b = 9 + b;
c = c + 7;

console.log(a, b, c);
*/


//Convierta las asignaciones para a, b y c para usar el operador -=.
/*
let a = 3;
let b = 17;
let c = 12;

a -= 12;
b -= 9;
c -= 7;

console.log(a, b, c);
*/

//Convierta las asignaciones para a, b y c para usar el operador *=.
/*
let a = 3;
let b = 17;
let c = 12;

a *= 12;
b *= 9;
c *= 7;

console.log(a, b, c);
*/



//Concatenación de cadenas con el operador +
/*
const ourStr = "Yo vengo primero. " + "Yo vengo segundo.";

console.log(ourStr);
*/

/*Crear variable solo lectura miCadena a partir de las cadenas "Este es el comienzo". y "Este es el final". 
utilizando el operador +. Asegúrese de incluir un espacio entre las dos cadenas.*/


/*
const miCadena ="Este es el comienzo." + " Este es el final"; //espacio apartir de las comillas
console.log(miCadena);
*/

//Almacenar múltiples valores en una variable usando matrices 
/*
const sandwich = [ 'crema de maní', 'mermelada', 'pan'];
console.log(sandwich);
*/

//Modificar el siguiente arreglo miArray para que contenga tanto una cadena como un número


/*
const miArray = ['html vs html5', 24];
console.log(miArray);
*/

//Anidar arreglos dentro de otros arreglos
/*
const Equipo = [['america', 23], ['pumas', 45]];
console.log(Equipo);
*/


//Acceder a los datos dentro de los arreglos usando índices.
/*
const arreglo = [50, 60, 70];
console.log(arreglo[0]);
const data = arreglo[1];
console.log(data);
*/

//función push().
/*
const posicion = [1, 2, 3];
posicion.push(4);

const equipoUno = ['Josian', 'Zulema', 'Dionicio'];
equipoUno.push(['Carlos', 'Gerardo']);
console.log(posicion);
console.log(equipoUno);
*/

//función .pop().
/*
const numLista = [1, 4, 6, 5, 7, 3, 8];
const eliminado = numLista.pop();
console.log(eliminado);
console.log(numLista);
*/

// ejemplo de una función:
/*
function functionName() {
  console.log("Hola Clase 6A");
}
functionName();
functionName();
functionName();
functionName();
*/


//Pasar valores a funciones con argumentos
/*
function saludo(param1, param2) {
  console.log(param1, param2);
}

saludo('¿Que va a', 'querer?');
saludo("¿Que va a", "llevar?");
*/


//Devolver un valor de una función con retorno
/*
function mulTres(num) {
  return num * 3;
}

const productoTres = mulTres(8);

console.log(productoTres);
*/

//Scope global
/*
var globalScope2;
function fun2() {
  globalScope2 = 7;
  console.log(globalScope2);
}
fun2();
*/


// Conceptos para crear un objeto
/*
function fun3() {
  const local = 'cof cof';
  console.log(local);
}

fun3();
console.log(local);
*/

/*
let pato = {
  nombre: 'Lucas',
  numPatas: 2,
  diNombre: function () { return 'El nombre de este pato es ' + pato.nombre + '.';}
};

console.log(pato.diNombre());
*/

/*
let perro = {
  nombre: "Copito",
  numPatas: 4,
  diPatas: function () {
    return "Este perro tiene " + perro.numPatas + " patas.";
  },
};

console.log(perro.diPatas());
*/
//En este segmento se utiliza la funcion This
/*
let pato = {
  nombre: "Lucas",
  numPatas: 2,
  diNombre: function () {
    return "El nombre de este pato es " + this.nombre + ".";
  },
};

console.log(pato.diNombre());
*/
// constructores
/*
function gato() {
  this.name = 'manchas';
  this.color = 'cafe y blanco';
  this.numLegs = 4;
  console.log(this.name);
}

gato();
*/
//diseñar su constructor perro para aceptar parámetros
/*
function perro(nombre, color) {
  this.nombre = nombre;
  this.color = color;
  this.numPatas = 4;

}

let malix = new perro('firulais', 'maylo');
console.log(malix.nombre);
*/




//Crear un contructor con tus datos de estudiante

function estudiante(nombre, semestre, carrera) {
    this.nombre = nombre;
    this.semestre = semestre;
    this.carrera = carrera;
  
    console.log(
      "El estudiante se llama:" +
        this.nombre +
        " y esta cursando el: " +
        this.semestre +
        "° semestre de la carrera: " +
        this.carrera
    );
  }
  
  let ingeniero = new estudiante('Gerardo Santana', '6', 'Ingenieria en Sistemas Computacionales') 
  console.log(ingeniero);
  