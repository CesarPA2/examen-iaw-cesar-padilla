//Ejercicio 1 (2,5 puntos)

const imput = require("prompt-sync")({siginit: true})
 
let flag=true
let numero
let suma=0
let dado

while (flag) {
    numero=imput("Introduce los dados que quieres tirar: ")

    if (numero=="cancelar"){
        console.log("cancelando")
        flag=false

    }else if(Number(numero)){
        suma+=Number(numero)

    }else{
        console.log("numero incorrecto")
    }

}
console.log(suma + " " +"dados tirados")
