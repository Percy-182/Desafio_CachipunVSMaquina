// Se pide ingresar cantidad de veces a enfrentarse a la maquina
var nVS = parseInt(
  prompt(
    "Cuantas veces quieres enfrentarte a Skynet? Ingresa un valor numérico si estás completamente seguro de lo que vas a hacer: "
  )
);
// Validamos que la opción ingresada por el usuario sea válida
if (nVS > 0) {
  // Bucle para i = iterar sobre el número de enfrentamientos
  for (let i = 0; i < nVS; i++) {
    // Se pide escribir que opción desea elegir para el VS con la maquina
    var player = prompt(
      "Escribe piedra, papel o tijera e intenta ganar a Skynet ('intenta'): "
    );

    var opciones = ["piedra", "papel", "tijera"];

    if (opciones.includes(player)) {
      var pc = Math.floor(Math.random() * opciones.length);
      eleccion = opciones[pc];
      console.log(`El Skynet seleccionó ${eleccion}`);

      // Se separa para orden visual y lógico jugadas para ganar del Player en un mismo if y en un else if las de Skynet
      if (
        (player === "piedra" && eleccion === "tijera") ||
        (player === "papel" && eleccion === "piedra") ||
        (player === "tijera" && eleccion === "papel")
      ) {
        console.log("Flawless Victory Humans ¡Wins!");
      } else if (
        (eleccion === "piedra" && player === "tijera") ||
        (eleccion === "papel" && player === "piedra") ||
        (eleccion === "tijera" && player === "papel")
      ) {
        console.log("¡Perfect Skynet Wins!");
      } else {
        console.log("¡Empate! Vivirás un día más...");
      }
    } else {
      // Validaciones
      console.log(
        "Por favor, ingresa una opción válida (piedra, papel o tijera)."
      );
      // Decrementar el contador para repetir el mismo turno del juego
      i--;
    }
  }
} else {
  // Validaciones
  console.log("Por favor, ingresa un número entero positivo.");
}
