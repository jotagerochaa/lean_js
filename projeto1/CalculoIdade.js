let expectativa = 80
let anoBase = 2026
let anoPar = []
let anoImpar = []

function verIdade(anoNascimento) {
    let idade = anoBase - anoNascimento
    let morte = expectativa - idade
    let anoMorte = anoBase + morte

    for (i = anoBase; i <= anoMorte; i++) {

        if (i % 2 == 0) {
            anoPar.push(i)

        }

        else {
            anoImpar.push(i)
        }
    }
    return {
        "Par": anoPar,
        "Impar": anoImpar,
    }
}


function contadorAlgarismo(array,algarismo) {
    let contador = 0
    for (i = 0; i < array.length; i++) {
        let index = array[i].toString()
        for (j = 0; j < index.length; j++) {
            if(index[j]==algarismo) {
                contador++
            }
        }
    }
    console.log(contador)
}
contadorAlgarismo(verIdade(2008).Impar,1)

// função que recebe ano de nascimento e verifica a idade,
//  confere o tempo para chegar na expectativa e mostra os anos que faltam para os 80 dentro de duas array par e impar

