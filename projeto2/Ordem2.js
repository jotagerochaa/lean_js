const ordenar = (e) => {
    if (typeof e !== 'string') {
        console.log('Valor invalido')
        return
    }

    let alfabeto = 'abcdefghijklmnopqrstuvwxyz', ordem = [], correct = []

    for (i = 0; i < e.length; i++) {
        for (j = 0; j < alfabeto.length; j++) {
            if (e[i] == alfabeto[j]) {
                ordem.push(j)
                break
            }
        }
    }

    for (i = 0; i < e.length - 1; i++) {
        for (j = 0; j < e.length - 1; j++) {
            if (ordem[j] > ordem[j + 1]) {
                let temp = ordem[j]
                ordem[j] = ordem[j + 1]
                ordem[j + 1] = temp
            }
        }
    }

    console.log(ordem)

    for (i = 0; i < e.length; i++) {
        for (j = 0; j < alfabeto.length; j++) {
            if (e[i] == alfabeto[j]) {
                correct.push(alfabeto[ordem[i]])
            }
        }
    }
    console.log(correct)

    let word = '' 

    for (i = 0; i < correct.length; i++) {
        word += correct[i]
    }

    console.log(word)
}

ordenar('banana')