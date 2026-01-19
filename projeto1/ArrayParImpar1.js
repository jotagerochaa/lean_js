// //Crie uma função analisarNumeros(lista)
// A função recebe um array de números
// Usando laços e condições, ela deve retornar:
// Quantos números são pares
// Quantos são ímpares
// Qual é o maior número
// Qual é o menor número


function AnalisarNumeros(array) {
    let parResult = 0
    let imparResult = 0
    let imparArray = []
    let parArray = []
    for (i = 0; i < array.length; i++) {

        if (array[i] % 2 == 0) {
            parResult += array[i]
            parArray.push(array[i])
        }

        else {
            imparResult += array[i]
            imparArray.push(array[i])

        }

    }
    console.log(parArray + " Par")
    console.log(imparArray + " Impar")

    let menor = array[0], maior = array[0]

    for (i = 0; i < array.length; i++) {
        if (maior < array[i]) {
            maior = array[i]
        }
    }
    console.log(maior)


    for (i = 0; i < array.length; i++) {
        if (menor > array[i]) {
            menor = array[i]
        }
    }
    console.log(menor)
}
AnalisarNumeros([6, 7, 8, 9, 2, 4, 1, 18, 34, 343, 455, 65, 64, 76, 23])