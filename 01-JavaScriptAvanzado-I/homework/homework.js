// !Scope & Hoisting
// Determiná que será impreso en la consola, sin ejecutar el código.
// Investiga cuál es la diferencia entre declarar una variable con var y directamente asignarle un valor.

x = 1; // asigno un valor a una variable ya declarada en linea 9 dentro de otra var que tiene una fn
var a = 5;
var b = 10;


var c = function(a, b, c) {
  var x = 10;
  console.log(x); // Da como valor 10 de var x = 10;
  console.log(a); // Da como valor 8 ya que se invoca c(8(a),9(b),10(c)) y a toma el primer valor.
  // ------
  var f = function(a, b, c) {
    b = a;
    console.log(b); // Da como valr 8 ya que se le da un nuevo valor a b y este valor es b = a.
    b = c;
    var x = 5;
  }
  // -------
  f(a,b,c);
  console.log(b); // Da como valor 9 ya que el console.log esta luego de la invocacion a la funcion f(a,b,c) y b = 9.
}


c(8,9,10); // asigno valores a la funcion la cuncion que esta dentro de la var c. IMP: 10 - IMP: 15 - IMP: 5 - IMP: 8,9, 10 

console.log(b); // Da como valor 10 ya que toma el valor de c(8,9,10) => c(a,b,c)
console.log(x); // *Da como valor undefined (no me queda claro bien por que?????)

// --------------------------------------------------------------------------------------------------------

console.log(bar); // Da como valor 1 por hoisting, aunque el console.log este antes de que se declare la var JS interpreta
                  // que tiene que dar un resultado y toma var bar = 1;
console.log(baz); // *Da como valor 2 por hoisting, ??
foo();            // *Da como resultado Hola. (Por hoisting ?)
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;

/* 
var baz = 1
undefined
bar = 2
2
*/

// --------------------------------------------------------------------------------------------------------

var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // Franco ya que entra en el if y toma esa variable.

// --------------------------------------------------------------------------------------------------------

var instructor = "Tony";
console.log(instructor); // Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // Franco 
   }
})();
console.log(instructor); // Tony

// --------------------------------------------------------------------------------------------------------

var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // The Flash
    console.log(pm); // Reverse Flash
}
console.log(instructor); // *Por que esta de "The Flash y no Tony" ???
console.log(pm); // Franco

/* ******************************************************************************************************** */

// !Coerción de Datos
//¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

6 / "3" // Da 2 - js pasa a el "3" de string a numero.
"2" * "3" // Da 6 - js no pude hacer opraciones entre string x lo tanto los pasa a numeros y hace la operacion.
4 + 5 + "px" // Como la linea empieza con numeros hace la suma de los numeros y concatena el resultado con el string y todo es un string "9px" 
"$" + 4 + 5  // Como la linea empieza con un string interpreta que los numeros tbn son string y concatena todo: "$45"
"4" - 2 // Da 2 pasa el string a numero y hace la resta
"4px" - 2 // Da NaN no puede hacer opraciones entre strings y numeros y no interpreta a "4px" como un nuemero.
7 / 0 // Por que da Infinity y no NaN
{}[0] // Da como resultado el la posicion del array
parseInt("09") // *Da 9, no entinedo por que ???
5 && 2  // Da 2 - AND lógico (&&) evalúa los operandos de izquierda a derecha, 
        // regresando inmediatamente con el valor del primer operando falso que encuentra; 
        //si todos los valores son verdaderos, se devuelve el valor del último operando.
2 && 5  // Da 5 idem al anterior.

5 || 0  //Da 5 - Devuelve expr1 si se puede convertir a true; de lo contrario, devuelve expr2.
        //Por lo tanto, cuando se usa con valores booleanos, || devuelve true si alguno de los operandos es true;
        //si ambos son falsos, devuelve false.
0 || 5 // Da 5 - Idem al anterior.

[3]+[3]-[10] // No lo entiendo
3>2>1 // *true - yo pense que daba true pero da FALSE ????
[] == ![]  // Da true ya que es una consucion los array vacios no son los mismos.


/* ******************************************************************************************************** */

//!Hoisting
//¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:


function test() {
    console.log(a); // Da undefined por que el console.log esta antes de que se declare la variable
    console.log(foo()); // Da 2 el valor de la fn foo()
 
    var a = 1;                          // * y hay un ultimo undefined qeu no se de donde sale ????
    function foo() {
       return 2;
    }
 }
 
 test();

 

// --------------------------------------------------------------------------------------------------------

var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);

/* ******************************************************************************************************** */

// !This
//¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

var fullname = 'Juan Perez';

var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // "Aurelio De Rosa" - Es el ultimo nombre declarado dentro del objeto.

var test = obj.prop.getFullname; 

console.log(test()); // * "Juan Perez" - No entiendo por que la unica difernecia es que getFullname tiene () y dentro de la variable no ???

/* ******************************************************************************************************** */


//!Event loop
//Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

function printing() {
    console.log(1);
    setTimeout(function() { console.log(2); }, 1000);
    setTimeout(function() { console.log(3); }, 0);
    console.log(4);
 }
 
 printing();

 // 1 -  console.log(1);                                                1
 // 2 -  console.log(4);                                                4
 // 3 -  setTimeout(function() { console.log(3); }, 0);                 3
 // 4 -  setTimeout(function() { console.log(2); }, 1000);              2

 // *Por que entre 4 y 3 aparece un "Undefined" ??