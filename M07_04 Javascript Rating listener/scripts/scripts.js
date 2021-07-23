
// Identificamos el elemento que contiene las estrellas
const zonaEstrellas = document.getElementById('listaID');

// Asignamos función al evento click
document.addEventListener('click', function (event) {
    // Eliminamos la clase de Animate.css para voverla a asignar y ejecutar la animación
    zonaEstrellas.classList.remove("animate__animated", "animate__rubberBand");
    // Añadimos la animación con breve delay para que funcione
    setTimeout(function(){ zonaEstrellas.classList.add("animate__animated", "animate__rubberBand") }, 10);
    // Asignamos 2segundos a la propiedad de duración de la animación
    zonaEstrellas.style.setProperty('--animate-duration', '2s');
    // 
    modificarRating(event);
});
function modificarRating(event) {
        //Si on s'ha fet el click pertany o no a la zona de les estrelles
        let isClickInside = zonaEstrellas.contains(event.target);

        // Si se ha hecho click en la zona de estrellas y en una de ellas (no en el espacio entre ellas)
        if (isClickInside && event.target.id != zonaEstrellas.id) {
            // aaaID.classList.add('animate__animated', 'animate__rubberBand');
            clickEstrella(event.target.id);
        } else {
            limpiar();
        }
    
}


// Al clicar una estrella:
//     1. inicializa todas a color por defecto con la función limpiar()
//     2. recorre el array de estrellas cambiando el color hasta la estrella clicada que se ha pasado como parámetro
function clickEstrella (estrella){
    // Pone todas las estrellas al estilo por defecto
    limpiar();

    // Recorre las estrellas cambiando el estilo a seleccionado hasta que encuentra a la que se ha hecho click
    for (let node of zonaEstrellas.children) {
        if(node.id == estrella) {
            document.getElementById(node.id).className="seleccionado far fa-star";
            break;
        } else {
            document.getElementById(node.id).className="seleccionado far fa-star";
        }
    }
}


/* Inicializa la lista de estrellas al estilo por defecto */
function limpiar() {
    for (let node of zonaEstrellas.children) {
        // document.getElementById("demo").innerHTML+="<br>Lista: " + node.id;
        document.getElementById(node.id).className="rating far fa-star";
    }
}

