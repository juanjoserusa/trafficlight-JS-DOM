document.addEventListener('DOMContentLoaded', function(){

let rojo = document.getElementById('rojo')
let amarillo = document.getElementById('amarilla')
let verde = document.getElementById('verde')
let start = document.getElementById('start')
let stop = document.getElementById('stop')



rojo.addEventListener('click', function(){
    //aqui va la logica con classlist.toggle para añadir una clase nueva a este elemento
    rojo.classList.toggle('glow')
    amarillo.classList.remove('glow')
    verde.classList.remove('glow')

})

amarillo.addEventListener('click', function(){
    //aqui va la logica con classlist.toggle para añadir una clase nueva a este elemento
    amarillo.classList.toggle('glow')
    rojo.classList.remove('glow')
    verde.classList.remove('glow')

})


verde.addEventListener('click', function(){
    //aqui va la logica con classlist.toggle para añadir una clase nueva a este elemento
    verde.classList.toggle('glow')
    amarillo.classList.remove('glow')
    rojo.classList.remove('glow')

})


// function intervalo(){


// }

let counter = ()=> setInterval(() => {
    
    setTimeout(() => {
        rojo.classList.toggle('glow')
    amarillo.classList.remove('glow')
    verde.classList.remove('glow')
    }, 0);

    setTimeout(() => {
        amarillo.classList.toggle('glow')
    rojo.classList.remove('glow')
    verde.classList.remove('glow')
    }, 2000);

    setTimeout(() => {
        verde.classList.toggle('glow')
    amarillo.classList.remove('glow')
    rojo.classList.remove('glow')
    }, 4000);

}, 4000);

const intervalo = () => {

    verde.classList.toggle('glow')
        amarillo.classList.remove('glow')
        rojo.classList.remove('glow')

    counter
    
}




start.addEventListener('click', intervalo)
stop.addEventListener('click',()=>{
    verde.classList.remove('glow')
    amarillo.classList.remove('glow')
    rojo.classList.remove('glow')
    intervalo
    clearInterval(counter)
})































})