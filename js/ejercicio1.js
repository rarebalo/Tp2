/*1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un
 mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.*/

 const edadUsuario = parseInt(prompt("Ingrese su edad, por que? no hay por que... ingrese su edad: "));

 if (edadUsuario >= 18) {
    alert("Usted ya puede conducir; siempre y cuando tenga carnet de conducir...");
 } else {
    alert(`Usted por el momento no puede conducir, regrese en ${18-edadUsuario} años y tal vez la respuesta cambie...`);
 }