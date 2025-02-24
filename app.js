// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const listaAmigos = [];
const ingresoAmigo = document.getElementById("amigo");
const ulListaAmigos = document.getElementById("listaAmigos");

function agregarAmigo() {
    const textoAmigo = ingresoAmigo.value;
    const soloTexto = /^[a-zA-Z\s]+$/; // Expresion Regular para permitir en el imput solo letras y espacios
    if (ingresoAmigo.value === "") {// Validación del imput
        alert("Debes ingresar el nombre del amigo...");
    }    
    else if(!soloTexto.test(textoAmigo)) {//validación del imput 
        alert("Debes ingresar un nombre sin caracteres especiales, ni numeros");
    }
    else {
        listaAmigos.push(ingresoAmigo.value);// agrega amigos a la lista
        actualizarListaAmigos()

    }
    ingresoAmigo.value = "";
    return;
}
function actualizarListaAmigos() {
         
    // Limpiar la lista existente
    ulListaAmigos.innerHTML = "";
    
    // Iterar sobre el arreglo listaAmigos
    for (let i = 0; i < listaAmigos.length; i++) {
        // Crear un nuevo elemento de lista para cada amigo
        const li = document.createElement("li");
        li.textContent = listaAmigos[i];
        
        // Agregar el elemento de lista a la lista en pantalla
        ulListaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    
    // Validar que haya amigos disponibles
    if (listaAmigos.length === 0) {
        alert("Lista de amigos vacía, por favor ingresa los nombres antes de sortear.");
    } else {
        // Generar un índice aleatorio
        const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        
        // Obtener el nombre sorteado
        let amigoSorteado = listaAmigos[indiceAleatorio];
        
        // Mostrar el resultado
        document.getElementById("resultado").innerHTML = `Tú amigo secreto es: ${amigoSorteado}`;
        listaAmigos.length = 0;// deja la lista vacia
        ulListaAmigos.innerHTML = ""; // limpia la pantalla de la lista de amigos
        
    }
    
    return;
}