/*
17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

Ejemplo:



Input: Hola mundo

Output: la vocal ‘o’ está en la posición 1
*/

  const textoUsuario = prompt("Ingrese un texto: ");

  for (let index = 0; index < textoUsuario.length; index++) {
    if (
        textoUsuario[index].toLocaleLowerCase() === "a" ||
        textoUsuario[index].toLocaleLowerCase() === "e" ||
        textoUsuario[index].toLocaleLowerCase() === "i" ||
        textoUsuario[index].toLocaleLowerCase() === "o" ||
        textoUsuario[index].toLocaleLowerCase() === "u"
      ) {
        alert(`La vocal ${textoUsuario[index].toLocaleUpperCase()} esta en la posicion ${index}`);
        break;
      }
  }
