let saldo = 0;
let saldoIngresado = 0;
let volverAOperar = 2;

do {
  const opcion = parseInt(
    prompt(
      "Seleccione una opcion: 1- Consulte el saldo, 2- Ingrese dinero, 3-Extraiga dinero"
    )
  );

  switch (opcion) {
    case 1:
      alert(`Su saldo es: ${saldo}`);
      break;
    case 2:
      saldoIngresado = parseInt(prompt("Ingrese el importe:"));

      saldo = +saldoIngresado;
      alert(`Su saldo actual es ${saldo}`);
      break;
    case 3:
      saldoIngresado = parseInt(prompt("Ingrese el importe:"));

      saldo = -saldoIngresado;
      alert(`Su saldo actual es ${saldo}`);
      break;

    default:
      alert("La opcion ingresada es incorrecta, ingrese una opcion correcta");
      break;
  }

  volverAOperar = parseInt(prompt("Desea realizar otra operacion? 1- SI 2- NO"));
  
} while (volverAOperar === 1);
