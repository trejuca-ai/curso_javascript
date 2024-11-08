function fetchData() {
	return new Promise((resolve, reject) => {
		
		setTimeout(() => {
			const data = true
			
			if (data) {
				resolve(data)
			} else {
				reject("El servidor no esta disponible")
			}
		}, 3000)
	})
}

fetchData()
	.then(data => {
		console.log(data)
	})
	.catch(error => {
		console.log(error)
	})
	
	
	
	
	
	
	
	
	