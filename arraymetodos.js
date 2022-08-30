let numeros=[
    -5,100,200,5.5
]
//agregar un  nuevo elemento a mi arreglo
//PUSH
numeros.push(10)
//console.log(numeros)

//rrecorrer arreglo
//tradicional
/*numeros.forEach(function(numero){
    console.log(numero)
})*/

//flecha
numeros.forEach(numero=>console.log(numero))

//filtrar arreglo
//tradicional
/*let filtro=numeros.filter(function(numero){
    return numero>=100

})
console.log(filtro)*/

//flecha 
let filtro=numeros.filter(numero=>numero>=100) 
//console.log(filtro)

//buscar elemento en un array
//tradicional
let buscado=numeros.find(function(numero){
    return(numero==10)
    

})
console.log(buscado)


//buscar elemento de otra manera
//tradicional
let ubicado=numeros.some(function(numero){
    return(numero==100)

})
//console.log(ubicado)

//recorriendo arreglo y modificango arreglos al mismo tiempo

let mapa = numeros.map(function(numero){
    return(numero=numero+1)

})
//console.log(mapa)
