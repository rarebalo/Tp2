/*4- Realiza un script que pida números hasta que se pulse “cancelar”.
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/

let entradaUsuario;
let numerosUsuario = [];
let totalNumeros = 0;

do {
  entradaUsuario = prompt(
    "Ingrese el numero a sumar, cuando desee saber el total presione cancelar."
  );

  if (entradaUsuario) {
    entradaUsuario = parseInt(entradaUsuario);
  }
  if (isNaN(entradaUsuario)) {
    alert(
      "No es un numero y en este caso no lo podremos sumar, ingresa solo numeros..."
    );
  } else {
    totalNumeros += entradaUsuario;
  }
} while (entradaUsuario !== null);

alert("Tolal: " + totalNumeros);
