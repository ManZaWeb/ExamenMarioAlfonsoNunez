document.addEventListener("DOMContentLoaded", function (){

const calcu = document.getElementById("calcu")
const m1 = document.getElementById("m1")
const m2 = document.getElementById("m2")

calcu.addEventListener('click', function (){
    const ancho = parseFloat(document.getElementById("ancho").value)
    const long = parseFloat(document.getElementById("long").value)
    let area = long * ancho
    let perimetro = (long + ancho) * 2
    let diagonal = Math.sqrt(Math.pow(long, 2) + Math.pow(ancho, 2))
    
   
    m1.innerHTML = "Área del rectangulo: " + area.toFixed(2)
    m2.innerHTML = "Perímetro del rectangulo: " + perimetro.toFixed(2)
    m3.innerHTML = "Diagonal del rectangulo: " + diagonal.toFixed(2)
   
} )
})