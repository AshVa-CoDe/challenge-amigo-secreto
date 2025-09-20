// Array donde se almacenarán los nombres
let listaAmigos = [];

// Función para agregar un amigo
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  // Validar que no esté vacío
  if (nombre === "") {
    alert("Por favor, escribe un nombre válido.");
    return;
  }

  // Agregar el nombre a la lista
  listaAmigos.push(nombre);

  // Limpiar el input
  input.value = "";

  // Actualizar la lista visual
  mostrarLista();
}

// Función para mostrar los nombres en la lista
function mostrarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpiar lista antes de volver a mostrarla

  listaAmigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = amigo;

    // Botón para eliminar un amigo de la lista
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "❌";
    btnEliminar.style.marginLeft = "10px";
    btnEliminar.onclick = () => eliminarAmigo(index);

    li.appendChild(btnEliminar);
    lista.appendChild(li);
  });
}

// Función para eliminar un amigo específico
function eliminarAmigo(index) {
  listaAmigos.splice(index, 1);
  mostrarLista();
}

// Función para sortear un amigo secreto
function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  // Escoger un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
  const amigoSecreto = listaAmigos[indiceAleatorio];

  // Mostrar el resultado
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;
}

// Función para limpiar toda la lista
function limpiarLista() {
  listaAmigos = [];
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
}
