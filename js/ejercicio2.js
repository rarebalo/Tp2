/*
2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según 
los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número
ingresado no es válido mostrar el mensaje “Introduce un número válido”.

Ejemplo:

Input: 5
Input: 50
Input: hola10
Output: Suficiente
Output: Número erróneo
Output: Introduce un número válido
*/

const notaUsuario = prompt("Se le informara una calificacion que corresponda a la nota ingresada en un rango del 0 al 10, ingrese la nota: ");


//al ingresar 50h por ejemplo lo toma como que es un numero, esto se debe corregir 
if (isNaN(notaUsuario)) {
    alert("Debes ingresar un numero del 1 al 10, recarga la pagina y vuelve a intentar...");
} else if (parseInt(notaUsuario) <= 2){
    alert(" Muy deficiente. ");    
} else if (parseInt(notaUsuario) > 2 && parseInt(notaUsuario) <= 4){
    alert(" Insufucuente");
} else if (parseInt(notaUsuario) > 4 && parseInt(notaUsuario) <= 6){
    alert(" Suficiente");
} else if (parseInt(notaUsuario) === 7){
    alert(" Bien");
} else if(parseInt(notaUsuario) > 7 && parseInt(notaUsuario) <= 9){
    alert(" Notable");
} else if(parseInt(notaUsuario) === 10){
    alert(" Sobresaliente");
} else if(parseInt(notaUsuario) > 10){
    alert("El numero no esta dentro del rango a evaluar, intentalo de nuevo recargando la pagina...");
}