function CreateQuadrado(size) {
    let linha = ""

    if (size <= 0) {
        console.log(" Numero invalido")
        return
    }

    for (i = 0; i < size; i++) {
        linha += "⬜"
    }
    for (i = 0; i < size; i++) {
        console.log(linha)
    }

}
CreateQuadrado("2")