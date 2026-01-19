// função que receba um valor e retorne a  converção em dolar, real e euro

function CambioMoeda(valor, moeda) {
    let euro = 6.27
    let dolar = 5.37

    dolar = valor / dolar
    euro = valor / euro

    switch (moeda) {
        case "dolar":
            console.log(dolar)
            break;

        case "euro":
            console.log(euro)
            break;
        default:
            console.log("erro")


    }

    console.log(" Seu valor definido de: R$" + valor + " , convertido em dolar é de:" + dolar + " e convertido para euro é: " + euro)

}
CambioMoeda(100, "libra")