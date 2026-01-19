// 9) Analisar notas (boletim)
// Crie: analisarNotas(notas)
// Regras:
// Recebe array de números 0 a 10
// Retorne um objeto com:
// Qual é a média?
// Qual é a maior nota?
// Qual é a menor nota?
// Quantos aprovados (nota ≥ 7)?
// Quantos reprovados (nota < 7

function analisarNotas(array) {
    let media = 0
    let menor = array[0], maior = array[0]
    let aprovado = 0
    let reprovado = 0 


    for (i = 0; i < array.length; i++) {
        media += array[i]

        if (maior < array[i]) {
            maior = array[i]

        }

        if (menor > array[i]) {
            menor = array[i]


        }

        if( array[i] < 70){
            reprovado++
        }
        else{
            aprovado++
        }
    }
    console.log(` esta é a media: ${media}`)
    console.log(`maior numero: ${maior}`)
    console.log(` menor numero: ${menor}`)
    console.log(` reprovados: ${reprovado}`)
    console.log(` aprovados: ${aprovado}`)


}
analisarNotas([60, 74, 42, 10, 32, 100, 70, 74, 2, 99])