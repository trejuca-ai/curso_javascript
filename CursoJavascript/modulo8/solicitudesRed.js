// Hacer una peticion a una API REST con fetch/then
/*fetch("https://jsonplaceholder.typicode.com/photos")
	.then(response => {
		if (!response.ok) {
			throw new Error("Error en la solicitud")
		}
		return response.json()
	})
	.then(data => {
		console.log(data)
	})
	.catch(error => {
		console.log(error)
	})*/
	
async function fetchData() {
	
	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/photos")
		console.log(response)
		if (!response.ok) {
			throw new Error("Error en la solicitud")
		}
		console.log(await response.json())
	} catch(error) {
		console.log(error)
	}
}

fetchData()





