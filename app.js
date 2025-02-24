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
        //ulListaAmigos.innerHTML += `<ul>${ingresoAmigo.value}</ul>`;

    }
    ingresoAmigo.value = "";
    return;
}