document.addEventListener("DOMContentLoaded", function (){

const ancho = parseFloat(document.getElementById("ancho").value)
const long = parseFloat(document.getElementById("long").value)
const calcu = document.getElementById("calcu")
const m1 = document.getElementById("m1")
const m2 = document.getElementById("m2")

calcular.addEventListener('click', function (){
    let area = long * ancho
    let perimetro = (long + ancho) * 2
    let diagonal = Math.sqrt(Math.pow(long, 2) + Math.pow(ancho, 2))
} )
})