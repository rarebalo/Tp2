/* 8- Crea script para generar pirámide siguiente con los números del 1 
al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……

*/

let numeroUsuario = 0;

do {
    numeroUsuario = parseInt(prompt("Ingrese un numero no mayor a 50 para generar una piramide: "));
} while (numeroUsuario>50);

for (let piso = 0; piso <= numeroUsuario; piso++) {
   
    for (let index = 1; index <= piso; index++) {
        
        document.write(index);
    }
    document.write("<br>");
}