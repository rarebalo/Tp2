//12- Realiza un script que genere un número aleatorio entre 1 y 99

/*
Debo de confesar que busando como hacer este ejercicio me spoilear el resultado directamente, yo pensaba que ya venia
con javascript la funcion; por ende este codigo no es de mi propiedad pero entiendo como funciona u.u 
*/

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
let numeroAleatorio;

document.write(getRandomIntInclusive(1, 99));