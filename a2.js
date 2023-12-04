
const imput = require("prompt-sync")({siginit: true})

let flag=true
let cadena=""
let texto=""

while (flag) {
    cadena=imput("Introduce texto ")

    if (cadena=="cancelar"){
        console.log("cancelando")
        flag=false

    }else{
        texto+=""+cadena
    }

}
console.log("El texto total es: "+texto)





