/*
6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….
*/
const altura = 30;

for (let index = 0; index < altura; index++) {
  for (let ramitas = 0; ramitas < index; ramitas++) {
    document.write(index);
  }
  document.write("<br>");
}
