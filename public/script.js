console.log(document.title);

function obtenerContenido(id) {
  const elemento = document.getElementById(id);
  return elemento.textContent.trim();
}

function nombresCompletosConsola() {
  const primerNombre = obtenerContenido("primerNombre");
  const segundoNombre = obtenerContenido("segundoNombre");
  const primerApellido = obtenerContenido("primerApellido");
  const segundoApellido = obtenerContenido("segundoApellido");

  let nombreCompleto1 = primerNombre;
  
  if (segundoNombre !== "") {
    nombreCompleto1 += " " + segundoNombre;
  }
  
  nombreCompleto1 += " " + primerApellido;

  if (segundoApellido !== "") {
    nombreCompleto1 += " " + segundoApellido;
  }

  const primerNombre2 = obtenerContenido("primerNombre2");
  const segundoNombre2 = obtenerContenido("segundoNombre2");
  const primerApellido2 = obtenerContenido("primerApellido2");
  const segundoApellido2 = obtenerContenido("segundoApellido2");

  let nombreCompleto2 = primerNombre2;
  
  if (segundoNombre2 !== "") {
    nombreCompleto2 += " " + segundoNombre2;
  }
  
  nombreCompleto2 += " " + primerApellido2;

  if (segundoApellido2 !== "") {
    nombreCompleto2 += " " + segundoApellido2;
  }

  console.log(`
-------
Integrante 1: "${nombreCompleto1}"
Integrante 2: "${nombreCompleto2}" 
-------
  `);
}
nombresCompletosConsola();

function comparar() {
  const primerNombre = document.getElementById("primerNombre").textContent;
  const segundoNombre = document.getElementById("segundoNombre").textContent;
  const primerApellido = document.getElementById("primerApellido").textContent;
  const segundoApellido =
    document.getElementById("segundoApellido").textContent;
  const primerNombre2 = document.getElementById("primerNombre2").textContent;
  const segundoNombre2 = document.getElementById("segundoNombre2").textContent;
  const primerApellido2 =
    document.getElementById("primerApellido2").textContent;
  const segundoApellido2 =
    document.getElementById("segundoApellido2").textContent;

  if (primerNombre === primerNombre2) {
    alert(`Hubo coincidencias en los nombres:  "${primerNombre}" `);
    color = prompt(`Ingrese un color para destacar los nombres:`);
    console.log(`Hubo coincidencias en los nombres: "${primerNombre}"`);
    document.getElementById("primerNombre").style.color = color;
    document.getElementById("primerNombre2").style.color = color;
  } else {
    alert("No se encontraron coincidencias en los nombres");
    console.log("No hubo coincidencias en los nombres");
  }

  preguntaApellidos = prompt("Desea comparar los apellidos? (si/no)");

  if (preguntaApellidos === "si") {
    if (primerApellido === primerApellido2) {
      alert(`Hubo coincidencias en los Apellidos: "${primerApellido}"`);
      color = prompt(`Ingrese un color para destacar los apellidos:`);
      console.log(`Hubo coincidencias en los apellidos: "${primerApellido}"`);
      document.getElementById("primerApellido").style.color = color;
      document.getElementById("primerApellido2").style.color = color;
    } else {
      alert("No se encontraron coincidencias");
      console.log("No hubo coincidencias en los apellidos");
    }
  }
}
comparar();
