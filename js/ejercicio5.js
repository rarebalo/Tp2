/*
5- Realizar una página con un script que calcule el valor de la letra 
de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:
  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: 

Input:  40773821 
Output: ‘L’
*/

let numeroDni = 0;
let letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];
let primeraDni = true;

do {
  while (primeraDni) {
    numeroDni = prompt("Ingrese su numero de DNI: ");
    primeraDni = false;
  }

  if (numeroDni) {
    numeroDni = parseInt(numeroDni);
  }
  if (Number.isNaN(numeroDni) || numeroDni > 99999999 || numeroDni < 0) {
    alert(
      "Lo que ingreso no fue el DNI o esta por fuera del rango (0-99999999), ingrese el DNI."
    );
    primeraDni = true;
  } else {
    numeroDni = prompt(
      `DNI: ${numeroDni} Letra correspondiente: ${
        letras[numeroDni % 23]
      }\nIngrese un nuevo DNI: `
    );
  }
} while (numeroDni !== null);
