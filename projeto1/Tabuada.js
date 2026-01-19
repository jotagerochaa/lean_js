// Objetivo:
// Gerar a tabuada de um número, mas com regras extras.
// Regras:
// Crie uma função tabuada(numero)
// Use for
// Se o número for:
// negativo → mostrar "Número inválido"
// zero → mostrar "Tabuada do zero é sempre zero"
// Caso válido, mostrar a tabuada do numero

function Tabuada(valor){

    if(valor<0){
        console.log(" Numero Invalido")
        return;
    }

    if(valor==0) {
        console.log( "Tabuada do zero é sempre zero")
        return;
    }

    for(i=0; i<=10; i++) {
        console.log(i + "x" + valor + " = " + i*valor)
    }
}
Tabuada(-2)