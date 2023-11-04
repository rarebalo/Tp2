/*
10- Realiza un script que pida número de filas y columnas y escriba una tabla.
Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente.
Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
  */

const filas = parseInt(prompt("Ingrese el numero de filas"));
const columnas = parseInt(prompt("Ingrese el numero de columnas"));
let numeroGrilla = filas * columnas;

document.write("<table>");

for (let indexFilas = 0; indexFilas < filas; indexFilas++) {
  document.write("<tr>");
  for (let indexColumnas = 0; indexColumnas < columnas; indexColumnas++) {
    document.write(`<th> ${numeroGrilla}</th>`);
    numeroGrilla--;
  }
  document.write("</tr>");
}

document.write("</table>");
