// função que recebe um valor, gera um valor aleatorio ate o valor e divide ate o resto ser 0, nao pode ser divisivel por 1 e mostrar quantas vezes executou

function NumeroAleatorio(numero) {

    let zero = 1

    while (true) {
        let valor = Math.floor(Math.random() * numero) + 1
        if (numero % valor == 0 && valor > 1) {
            console.log(" Divisão completa")
            console.log("contador: " +zero)
            console.log(" numero divisivel: " + valor)
            console.log( " Resultado: " + numero/valor)
            break;
        }
        else {
            zero++
        }
    }


}
NumeroAleatorio(420)



//