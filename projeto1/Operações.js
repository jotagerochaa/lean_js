function soma(x, y) {
    let resultado = x + y
    return resultado
}

function divisao(x, y) {
    let resultado = x / y
    return resultado
}

function sub(x, y) {
    let resultado = x - y
    return resultado
}

function mult(x, y) {
    let resultado = x * y
    return resultado
}

console.log(divisao(
    mult(
        soma(4, 5), sub(4, 5)
    ), 2
))

