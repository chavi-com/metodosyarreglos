let peliculas=[
    {nombre:"Haarry Poter",genero:"ciencia ficccion",costo:2000},
    {nombre:"Dragon ball Super",genero:"anime",costo:3000},
    {nombre:"Wakanda Forever",genero:"ciencia ficcion",costo:5000},
    {nombre:"Django sin cadenas",genero:"ciencia ficcion",costo:1500},
    {nombre:"El viaje del chigui",genero:"anime",costo:60000}
]

//reorrer
//flecha

/*let filtro = peliculas.filter(pelicula=>pelicula.genero=="ciencia ficcion")
console.log(filtro)*/

//peliculas de anime por valor de 3000

/*let filtro2 = peliculas.filter(pelicula=>pelicula.genero=="anime")
let busqueda1 = filtro2.find(busco=>busco.costo==3000)
console.log(busqueda1);*/
let mapa = peliculas.map(function(pelicula){
    return pelicula.costo=pelicula.costo/1000

})
//console.log(peliculas)

let mapa2 = peliculas.map(function(pelicula){
    return pelicula.nombre="edison"

})
console.log(peliculas)
