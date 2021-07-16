
document.getElementById("containerID").addEventListener("click", clickfuera);
// Utilizamos la variable clickDentro para indicar que se ha hecho click en la zona de estrellas
var clickDentro = 0;

// Si el click no es en la zona de estrellas (clickDentro==0) inicializa las estrellas con la función limpiar()
// Dejamos el semáforo siempre a 0 y sólo se pone a 1 si se ha clicado una estrella
function clickfuera() {
    if (clickDentro == 0) {
        limpiar();
    }
    clickDentro = 0;
}

// Al clicar una estrella:
//     1. inicializa todas a color por defecto con la función limpiar()
//     2. recorre el array de estrellas cambiando el color hasta la estrella clicada que se ha pasado como parámetro
function clickEstrella (estrella){
    let i = 0;
    limpiar();
    clickDentro = 1;
    for (let i = 0; i < listaID.children.length; i++) {
        if(listaID.children[i].id == estrella.id) {
            document.getElementById(listaID.children[i].id).className="seleccionado";
            break;
        } else {
            document.getElementById(listaID.children[i].id).className="seleccionado";
        }
    }
}

/* Inicializa la lista de estrellas al estilo por defecto */
function limpiar() {
    for (let i = 0; i < listaID.children.length; i++) {
        document.getElementById(listaID.children[i].id).className="rating";
    }
}

