//15- Realiza un script que cuente el número de vocales que tiene un texto.

const textoUsuario = prompt(
  "Ingrese el texto del cual desea saber cuantas vocales contiene: "
);

const subTextoUsuario = textoUsuario.split("");
let numeroDeVocales = 0;
let vocales = [];

for (let index = 0; index < subTextoUsuario.length; index++) {
  if (
    subTextoUsuario[index].toLocaleLowerCase() === "a" ||
    subTextoUsuario[index].toLocaleLowerCase() === "e" ||
    subTextoUsuario[index].toLocaleLowerCase() === "i" ||
    subTextoUsuario[index].toLocaleLowerCase() === "o" ||
    subTextoUsuario[index].toLocaleLowerCase() === "u"
  ) {
    numeroDeVocales++;
  }
}

alert(numeroDeVocales);
