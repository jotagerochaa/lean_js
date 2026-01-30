let x = parseFloat(prompt(" Digite o primeiro numero"))
let y = parseFloat(prompt(" Digite o segundo numero"))
let operacao = prompt(" Escolha a operação: \n 1 - soma \n 2 - subtração \n 3 - multiplicação \n 4 - divisão")
let resultado = 0
switch (operacao) {
    case "1":
        resultado = x + y
        operacao = "soma"
        break;
    case "2":
        resultado = x - y
        operacao = "subtração"
        break;
    case "3":
        resultado = x * y
        operacao = "multiplicação"
        break;
    case "4":
        resultado = x / y
        operacao = "divisao"
        break;
}
 alert(" O resultado da " + operacao + " é: " + resultado)