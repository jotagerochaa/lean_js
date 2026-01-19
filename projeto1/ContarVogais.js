function ContadorVogais(martin) {
    let total = 0
    for (i = 0; i < martin.length; i++) {
        console.log(martin[i])

        if (martin[i] == "a" || martin[i] == "e" || martin[i] == "i" || martin[i] == "o" || martin[i] == "u") {
            console.log(" é vogal ")

            total++

        }
    }
    console.log(total)
}
ContadorVogais("luquinhas")