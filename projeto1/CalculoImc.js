let altura = 1.92
let peso = 100

imc = peso / (altura * altura)


if (imc < 18.5) {
    console.log(" Seu IMC é: " + imc + ",classificado como peso baixo!")
}

else if (imc > 18.5 && imc < 24.99) {
    console.log(" Seu IMC é: " + imc + ",classificado como peso normal!")
}

else if (imc > 25 && imc < 29.99) {
    console.log(" Seu IMC é: " + imc + ",classificado como sobrepeso!")
}

else if (imc > 30) {
    console.log(" Seu IMC é: " + imc + ",classificado como obesidade, SE CUIDE!")
}
