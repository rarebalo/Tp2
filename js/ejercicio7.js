/*
7- Haz un script que escriba una pirámide inversa de los números del 1 
al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/
let  numeroUsuario = 0;

do {
  numeroUsuario = parseInt(
    prompt("Ingrese un numero (no mayor a 50) para formar una priramide inversa: ")
  );
} while (numeroUsuario > 50);


for (let piso = numeroUsuario; piso > 0; piso--) {
  for (let index = 0; index < piso; index++) {
    document.write(piso);
  }

  document.write("<br>");
}
