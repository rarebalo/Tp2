//16- Realiza un script que pida una cadena de texto y la devuelva al revés.
// Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

const textoUsuario = prompt("Ingrese el texto que vamos a licuar");

const preparandoTextoParaElLicuado = textoUsuario.split("");
let textoLicuado = [];


for (let index =  preparandoTextoParaElLicuado.length -1; index >= 0; index--) {
   textoLicuado.push(preparandoTextoParaElLicuado[index]);      
}


alert(textoLicuado.join(""));