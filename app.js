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
        console.log(`Amigo ${ingresoAmigo.value} agregado a la lista.`);
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