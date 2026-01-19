// criptografar qualquer letra do alfabeto trocando ela por outra letra e as unidades de 0 a 9 por um emoji

  function Criptografia(texto) {

    let final = ""
    let map = {
        "a": "b", "A": "b",
        "b": "c", "B": "c",
        "c": "d", "C": "d",
        "d": "e", "D": "e",
        "e": "f", "E": "f",
        "f": "g", "F": "g",
        "g": "h", "G": "h",
        "h": "i", "H": "i",
        "i": "j", "I": "j",
        "j": "k", "J": "k",
        "k": "l", "K": "l",
        "l": "m", "L": "m",
        "m": "n", "M": "n",
        "n": "o", "N": "o",
        "o": "p", "O": "p",
        "p": "q", "P": "q",
        "q": "r", "Q": "r",
        "r": "s", "R": "s",
        "s": "t", "S": "t",
        "t": "u", "T": "u",
        "u": "v", "U": "v",
        "v": "w", "V": "w",
        "w": "x", "W": "x",
        "x": "y", "X": "y",
        "y": "z", "Y": "z",
        "z": "a", "Z": "a",

        "0": "😭",
        "1": "💀",
        "2": "💔",
        "3": "❤️",
        "4": "😘",
        "5": "🔫",
        "6": "🔪",
        "7": "😱",
        "8": "🕷️",
        "9": "👻",
        " ": " "
    }
    for (i = 0; i < texto.length; i++) {
        final += map[texto[i]]
    }
    return(final)
}

function Descriptografia(texto) {
    let map = {
        "b": "a",
        "c": "b",
        "d": "c",
        "e": "d",
        "f": "e",
        "g": "f",
        "h": "g",
        "i": "h",
        "j": "i",
        "k": "j",
        "l": "k",
        "m": "l",
        "n": "m",
        "o": "n",
        "p": "o",
        "q": "p",
        "r": "q",
        "s": "r",
        "t": "s",
        "u": "t",
        "v": "u",
        "w": "v",
        "x": "w",
        "y": "x",
        "z": "y",
        "a": "z",

        "😭": "0",
        "💀": "1",
        "💔": "2",
        "❤️": "3",
        "😘": "4",
        "🔫": "5",
        "🔪": "6",
        "😱": "7",
        "🕷️": "8",
        "👻": "9",
        " ": " "
    }


    let final = ""
    for (i = 0; i < texto.length; i++) {
        final += map[texto[i]]
    }
    return(final)
}

let text = "hoje e sexta feira"
console.log(Criptografia(text))
console.log(Descriptografia(Criptografia(text)))