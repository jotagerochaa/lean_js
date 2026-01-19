// 1) Somar positivos

// Crie: somarPositivos(lista)
// Regras:

// Recebe um array de números

// Some apenas os números > 0

// Ignore 0 e negativos

// Retorne a soma

function SomarPositivo(array) {
    let soma = 0

    for (i = 0; i < array.length; i++) {

        if (array[i] <= 0) {
            console.log(" este numero nao é positivo")
        }
        else {
            soma += array[i]
        }


    }
    console.log(soma)

}
SomarPositivo([-10, 2, 4, -2, 0, 1, 300, 40, -12])