// Hacer una peticion a una API REST con fetch/then
function fetchDataThenCatch() {
	fetch("https://jsonplaceholder.typicode.com/photos")
		.then(response => {
			if (!response.ok) {
				throw new Error("Error en la solicitud")
			}
			return response.json()
		})
		.then(data => {
			data.forEach(function(dato) {
				console.log(dato)
			})
		})
		.catch(error => {
			console.log(error)
		})	
}

// Hacer una peticion a una API REST con async/await
async function fetchDataAsyncAwait() {
	
	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/photos")
		console.log(response)
		if (!response.ok) {
			throw new Error("Error en la solicitud")
		}
		
		data = await response.json()
/*		data.forEach(function(dato) {
			console.log(dato)
		})*/
		return data
	} catch(error) {
		console.log(error)
	}
}

fetchDataAsyncAwait()
	.then(data => console.log(data))

async function consultarApiSecuencialmente() {
	
	const inicio = performance.now()
	
	//console.log("Iniciandop primera consulta")
	const response = await fetch("https://jsonplaceholder.typicode.com/photos")
	const resultado = await response.json()
	
	//console.log("Iniciando segunda consulta")
	const response2 = await fetch("https://jsonplaceholder.typicode.com/users")
	const resultado2 = await response2.json()
	
	const final = performance.now()
	
	// String template
	console.log(`Tiempo de ejecución secuencial: ${final - inicio}`) 
}

async function consultarApiEnParalelo1() {
	
	const inicio = performance.now()
	
	const [respuesta1, respuesta2, respuesta3] = await Promise.all(
		[
			fetch("https://jsonplaceholder.typicode.com/photos"),
			fetch("https://jsonplaceholder.typicode.com/users"),
			fetch("https://jsonplaceholder.typicode.com/comments"),
		]
	)
	
	const data1 = await respuesta1.json()
	const data2 = await respuesta2.json()
	const data3 = await respuesta3.json()
		
	const final = performance.now()

	// String template
	console.log(`Tiempo de ejecución en paralelo1: ${final - inicio}`) 
}

async function consultarApiEnParalelo2() {
	
	const inicio = performance.now()
	const urls = [
		"https://jsonplaceholder.typicode.com/photos",
		"https://jsonplaceholder.typicode.com/users",
		"https://jsonplaceholder.typicode.com/comments"
	]
	
	const respuestas = await Promise.all(urls.map(url => fetch(url)))
	const datas = await Promise.all(respuestas.map(respuesta => respuesta.json()))
	
/*	const data1 = await respuesta1.json()
	const data2 = await respuesta2.json()*/
		
	const final = performance.now()

	// String template
	console.log(`Tiempo de ejecución en paralelo2: ${final - inicio}`) 
}

//consultarApiEnParalelo1()
//consultarApiEnParalelo2()



