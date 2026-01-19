// calcular volume  e a area de um cilindro
// Atotal​=2πr2+2πrh
//  V=πr2h
// paralelepipedo = V=a⋅b⋅c  A=2(ab+ac+bc)
//triangulo  A=2b⋅h​

function CalcularAreaVolume(forma, x, y, z) {
    let area = 0, volume = 0

    if ((x <= 0 || y <= 0) || (typeof x != "number" || typeof y != "number")) {
        console.log(" erro")
        return
    }

    switch (forma) {
        case "cilindro":
            area = 2 * 3.14 * (x * x) + 2 * 3.14 * x * y
            volume = 3.14 * (x * x) * y
            break;

        case "triangulo":
            area = 2 * x * y
            break;

        case "paralelepipedo":
            area = 2 * (x * y + x * z + y * z)
            volume = x * y * z
            break;
        default:
            console.log("erro")
    }



    console.log(area)
    console.log(volume)

}
CalcularAreaVolume("buceta", 3, 15, 7)

// let nome = "joao"
// let numero = 64
// let tipo = typeof numero
// console.log(tipo)
// console.log(typeof numero)
// console.log(typeof nome)