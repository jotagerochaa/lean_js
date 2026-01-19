//receber uma palavra e ordenar em ordem alfabetica

let alfabeto = "abcdefghijklmnopqrstuvwxyz"
let palavra = "banana"
let palavraOrdenada = palavra
.split("")
.sort()
.join("")

console.log(palavraOrdenada)