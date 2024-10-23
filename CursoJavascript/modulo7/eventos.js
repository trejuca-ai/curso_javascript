// Ejericicio 1. Acceder a todas las etiquetas de enlaces (a).

const enlaces = document.querySelectorAll('a.enlace');

enlaces.forEach(enlace => {
    console.log(`Texto: ${enlace.textContent}, URL: ${enlace.href}`);
});

// Ejercicio 2.  Acceder a todas las etiquetas a través de su clase
const enlaces2 = document.getElementsByClassName('enlace');

for (let i = 0; i < enlaces2.length; i++) {
    console.log(`Texto: ${enlaces2[i].textContent}, URL: ${enlaces2[i].href}`);
}

// Ejercicio 4. Agregar un nuevo enlace (a)
const crearEnlace = function() {
	// Obtener contenedor
	const cuerpo = document.getElementById("cuerpo")
	// Crear el nuevo elemento
	const nuevoEnlace = document.createElement("a")
	
	nuevoEnlace.href = "http://unam.mx"
	nuevoEnlace.textContent = "Visitar sitio oficial de la UNAM"
	
	//Agregar el nuevo enlace al arbol DOM
	cuerpo.appendChild(nuevoEnlace)
}


// Ejercicio 5. Agregar una nueva caja de texto (input)
const crearCajaTexto = function() {
	// Obtener contenedor
	const cuerpo = document.getElementById("contenedor-text")
	// Crear el nuevo elemento
	const nuevaCajaTexto = document.createElement("input")
	
	nuevaCajaTexto.placeholder = "Caja texto 3"
	nuevaCajaTexto.value = "Nueva caja agregada con javascript"
	
	//Agregar el nuevo enlace al arbol DOM
	cuerpo.appendChild(nuevaCajaTexto)
}

// Ejercicio 6. Cambiar el titulo de la pagina
const cambiarTituloVentana = function() {
	const titulo = prompt("Ingresa el nuevo titulo")
	document.title = titulo
}

// Ejercicio 7.  Agregar un valor a la caja de texto para el nombre.
const cambiarContenidoCajasTexto = function() {
	
	const contenido = document.querySelector("input[type=text]").value
	
	document.querySelectorAll("input[type=text][id='caja3']").forEach(function(elemento) {
		elemento.value = contenido
	})
}

// Ejercicio 8. Eliminar un elemento del documento.
const eliminarCajaTexto = function() {
	const id = prompt("Ingresa el id: ")
	const caja = document.getElementById(id)
	
	if (caja) {
		caja.remove()
	} else {
		alert("No existe el elemento con el id proporcionado")
	}
}

// ejercicio 9. Cambiar el color del fondo de la pagina.
const cambiarColorPagina = function() {
	
	const selectorColor = document.getElementById("selectorColor")
	selectorColor.addEventListener('input', function() {
		document.body.style.backgroundColor = selectorColor.value
	})
}





