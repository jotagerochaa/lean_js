// receber uma senha e verificar se contem um caracter especial, uma letra maiuscula, numero e 8 caracteres

function VerificarSenha(senha) {
    if (senha.length < 8) {
        console.log("senha curta")
        return
    }

    let especial = 0, numero = 0, letra = 0
    let alfabeto = "abcdefghijklmnopqrstuvwxyz"
    for (i = 0; i < senha.length; i++) {
        if (senha[i] == "@" || senha[i] == "#" || senha[i] == "$" ||
            senha[i] == "%" || senha[i] == "&" || senha[i] == "*" ||
            senha[i] == "+" || senha[i] == "-") {
            especial++
        }
        if (senha[i] == "0" || senha[i] == "1" || senha[i] == "2" ||
            senha[i] == "3" || senha[i] == "4" || senha[i] == "5" ||
            senha[i] == "6" || senha[i] == "7" || senha[i] == "8" ||
            senha[i] == "9") {
            numero++
        }
        for (j = 0; j < alfabeto.length; j++) {
            if (senha[i] == alfabeto[j]) {
                letra++
            }
        }
    }

    if (especial > 0 && numero > 0 && letra > 0) {
        console.log(" senha valida: " + senha)
    }
    else {
        console.log(" senha invalida")
    }
}
VerificarSenha("647836ghdhjevd")
