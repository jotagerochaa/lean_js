// função que recebe dois valores e verifica se um e multiplo do outro
// if (i % 2 == 0) {

let resto = 0
function VerificarMultiplo(numero, numero2) {
    resto = numero % numero2
    if (resto == 0) {
        console.log(" os numeros são multiplos, e o resultado da divisão é: " + numero/numero2 )
    }
    else {
        console.log(" os numeros nao sao multiplos")
    }

}
VerificarMultiplo(70, 10)