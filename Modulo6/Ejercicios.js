const arreglo = [1,2,3,4,5,6]

// Ejercicios

// 1. Elevar al cuadrado todos los elementos de un arreglo. 
arreglo.map(numero => numero ** 2)

// 2. Filtrar los números pares de un arreglo.
arreglo.filter(numero => numero % 2 === 0)

// 3. Sumar todos los elementos de un arreglo.
arreglo.reduce((ac, va) => ac + va,0)

// 4. Verificar si todos los elementos de un arreglo son mayores que 0.
arreglo.every(numero =>  numero > 0)
 
// 5. Verificar si algunos de los elementos del arreglo es menor que 0
arreglo.some(numero => numero < 0)

// 6. Ordenar un arreglo
arreglo.sort((a,b) => a - b)

// 7. Verificar si el arreglo contiene un valor
arreglo.includes(5)



