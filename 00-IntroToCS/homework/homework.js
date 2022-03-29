'use strict'

function BinarioADecimal(num) {

  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum += +num[i] * 2 ** (num.length - 1 - i);
  }
  return sum;


}

function DecimalABinario(num) {

  let bin = [];
  do {

    bin.push(num % 2)     // tomo el resto y lo meto dentro de un array
    num = Math.floor(num / 2) // tomo el resultado de la division para volver dividirlo

  } while (num !== 0); // la condicion para que se hagan las operaciones anteriores hasta que el resultado de la div sea 0

  return bin.reverse().join('') // retorno el valores de atras para adelante y los paso a string

}

// function DecimalABinario(num) {

// var number = parseInt(num);
// var resultado = number.toString(2);
// return resultado;

// }



module.exports = {
  BinarioADecimal,
  DecimalABinario,
}