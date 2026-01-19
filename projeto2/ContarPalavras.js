
// console.log(nome.length)
// console.log(nome.split(" "))
// console.log(nome.replace(/o/g,"#"))
// console.log(nome.slice(0,-5))


function ContarPalavras(array) {
    let media = 0, total = 0
    for (i = 0; i < array.length; i++) {
       
        let fullName = array[i].split(" ")
        let contador = 0

        for (j = 0; j < fullName.length; j++) {
            if (fullName[j] == "de") {
                contador++
            }
            if (fullName[j] == "da") {
                contador++
            }
            if (fullName[j] == "das") {
                contador++
            }
            if (fullName[j] == "dos") {
                contador++
            }
            if (fullName[j] == "do") {
                contador++
            }
           
        }
         total += (fullName.length - contador)
         
    }

    console.log(total)
    console.log(array.length)


}
ContarPalavras(["Ana Clara Souza", "João Pedro Almeida", "Maria Eduarda Santos", "Lucas Gabriel Pereira", "Pedro Henrique Costa", "Ana Paula Ribeiro", "Carlos Eduardo Nogueira", "Mariana de Oliveira", "José Augusto da Silva", "Paulo Victor Fernandes", "Fernanda Lopes Martins", "Rafael dos Santos Lima", "Juliana Costa Rocha", "Luiz Felipe Azevedo", "Beatriz Souza Pacheco", "Marcos Vinícius Moreira", "Clara Maria de Jesus", "Thiago André Teixeira", "Daniela Cristina Barros", "André Luiz da Cunha", "Renata Paula Figueiredo", "Felipe Matheus Gonçalves", "Camila Rocha Bastos", "Bruno César de Melo", "Patrícia Helena Freitas"])