//Author: Mario Alfonso Nuñez
//GitHub link: 

document.addEventListener("DOMContentLoaded", function (){
//Elementos necesarios del DOM
const calcu = document.getElementById("calcu")
const m1 = document.getElementById("m1")
const m2 = document.getElementById("m2")

calcu.addEventListener('click', function (){
    //Variables para el JS
    const ancho = parseFloat(document.getElementById("ancho").value)
    const long = parseFloat(document.getElementById("long").value)

    if(!isNaN(ancho) && !isNaN(long)){//Solo se realizan las operaciones si ambos valores son introducidos
    //Formulas
        let area = long * ancho
        let perimetro = (long + ancho) * 2
        let diagonal = Math.sqrt(Math.pow(long, 2) + Math.pow(ancho, 2))
        
            
        m1.innerHTML = "Área del rectangulo: " + area.toFixed(2)//toFixed para redondear a 2 decimales
        m2.innerHTML = "Perímetro del rectangulo: " + perimetro.toFixed(2)
        m3.innerHTML = "Diagonal del rectangulo: " + diagonal.toFixed(2)

        }else {
            m1.innerHTML = "Inserte valores válidos"
            m2.innerHTML = ""//Arregla un bug si dejas un campo sin rellenar si ya habias hecho un cálculo
            m3.innerHTML = ""
        }

} )
})