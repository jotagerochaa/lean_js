// funçao recebe doi svalores base (unidade) 1 a 9, e dois valores de referencia de intervalo, 

function ValoresBase(base1, base2, ref1, ref2) {

    if (
        base1 < 0 || base1 > 10 ||
        base2 < 0 || base2 > 10
    ) {
        console.log("Bases inválidas:", base1, base2);
        return;
    }

    let index = 0
    for (i = ref1; i <= ref2; i++) {

        if (i % base1 == 0) {
            index++
        }

        if (i % base2 == 0) {
            index++
        }

        if (i % base1 == 0 || i % base2 == 0) {
            console.log(i)
        }


    }
    console.log(" total " + index)
}
ValoresBase(14, 5, 20, 100)