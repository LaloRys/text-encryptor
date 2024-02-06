function validar(valor) {
  const caracterValido = /[a-zñ ]/;
  var cadenaModificada = "";
  for (let i = 0; i < valor.length; i++) {
    if (!caracterValido.test(valor[i])) {
      mostrarAlerta();
    } else {
      cadenaModificada = cadenaModificada + valor[i];
    }
  }
  document.querySelector("#cadena").value = cadenaModificada;
}

cadena.addEventListener("paste", (e) => {
  const caracterValido = /[a-zñ ]/;
  var cadena = e.clipboardData.getData("text/plain");
  var bandera = "ok";

  for (let i = 0; i < cadena.length; i++) {
    if (!caracterValido.test(cadena[i])) {
      bandera = "";
      mostrarAlerta();
      e.preventDefault();
    }
  }

  estadoBoton(bandera);
});


function mostrarAlerta() {
  var alerta = document.getElementById("miAlerta");
  alerta.style.display = "block"; 

  setTimeout(function(){ 
    alerta.style.display = "none"; 
  }, 4500); 
}


//Funcion para activar o desactivar los botones
function estadoBoton(valor) {
  let button1 = document.querySelector("#boton1");
  let button2 = document.querySelector("#boton2");
  var soloEspacios = true;

  for (let i = 0; i < valor.length; i++) {
    if (valor[i] != " ") {
      soloEspacios = false;
    }
  }

  if (valor === "" || soloEspacios == true) {
    button1.disabled = true;
    button2.disabled = true;
    button1.className = "boton";
    button2.className = "boton";
  } else {
    button1.disabled = false;
    button2.disabled = false;
    button1.className = "boton activo";
    button2.className = "boton activo";
  }
}

function obtenerTexto() {
  var texto = document.querySelector("#cadena");
  return texto.value;
}

//Funcion para encriptar
function encriptar() {
  texto = obtenerTexto();
  var resultado = "";
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      resultado = resultado + "ai";
    } else if (texto[i] == "e") {
      resultado = resultado + "enter";
    } else if (texto[i] == "i") {
      resultado = resultado + "imes";
    } else if (texto[i] == "o") {
      resultado = resultado + "ober";
    } else if (texto[i] == "u") {
      resultado = resultado + "ufat";
    } else {
      resultado = resultado + texto[i];
    }
  }
  ocultarMuñeco();
  desactivarBotones();
  limpiarTextarea();
  mostrarResultado();
  mostrarResultado(texto, resultado, "encriptado");
  document.querySelector("#boton-copiar").className = "";
  document.querySelector("#aviso-copiado").className = "ocultar";
}

function desencriptar() {
  texto = obtenerTexto();
  var resultado = "";
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      resultado = resultado + "a";
      i = i + 1;
    } else if (texto[i] == "e") {
      resultado = resultado + "e";
      i = i + 4;
    } else if (texto[i] == "i") {
      resultado = resultado + "i";
      i = i + 3;
    } else if (texto[i] == "o") {
      resultado = resultado + "o";
      i = i + 3;
    } else if (texto[i] == "u") {
      resultado = resultado + "u";
      i = i + 3;
    } else {
      resultado = resultado + texto[i];
    }
  }
  ocultarMuñeco();
  desactivarBotones();
  limpiarTextarea();
  mostrarResultado();
  mostrarResultado(texto, resultado, "desencriptado");
  document.querySelector("#boton-copiar").className = "";
  document.querySelector("#aviso-copiado").className = "ocultar";
}

function desactivarBotones() {
  document.querySelector("#boton1").className = "boton";
  document.querySelector("#boton2").className = "boton";
  document.querySelector("#boton1").disabled = true;
  document.querySelector("#boton2").disabled = true;
}

function ocultarMuñeco() {
  contenido = document.querySelector("#cont-ocultar");
  contenido.className = "ocultar";
}

function mostrarResultado(textoOriginal, resultado, funcion) {
  var textResultado = document.querySelector("#texto-resultado");
  var contentResultado = document.querySelector("#content-resultado");
  var tituloResultado = document.querySelector("#titulo-resultado");
  var tipoFuncion = document.querySelector("#tipoFuncion");

  tipoFuncion.textContent = `${funcion} es:`;
  contentResultado.className = "";
  tituloResultado.textContent = `"${textoOriginal}"`;
  textResultado.textContent = resultado;
}

function limpiarTextarea() {
  document.querySelector("#cadena").value = "";
}

const copiarContenido = async () => {
  let texto = document.getElementById("texto-resultado").innerHTML;
  try {
    await navigator.clipboard.writeText(texto);
    document.querySelector("#boton-copiar").className = "ocultar";
    document.querySelector("#aviso-copiado").className = "";
  } catch (err) {
    console.error("Error al copiar: ", err);
  }
};

function cambiarColores() {
  document.getElementById("toggle").classList.toggle("active");
  document.querySelector("header").classList.toggle("active");
  document.getElementById("col1").classList.toggle("active");
  document.querySelector("small").classList.toggle("active");
  document.getElementById("col2").classList.toggle("active");
  document.getElementById("resultado").classList.toggle("active");
  document.querySelector("footer").classList.toggle("active");
}
