class Pessoa {
    constructor(nome, idade, peso, alturaCm) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.alturaCm = alturaCm
    }

    maiorIdade() {
        let idadeTemp = this.idade
        if (idadeTemp < 18 && idadeTemp > 0) {
            return " voce ainda nao atingiu a maioridade"
        }
        else if (idadeTemp >= 18) {
            return "voce atingiu a maioridade"
        }
        else{
            return "erro"
        }
    }
    apresentarPessoa() {
        alert(`
            Seu nome é: ${this.nome}
            Sua idade é:  ${this.idade}
            Seu peso é: ${this.peso}
            Sua altura em cm é:  ${this.alturaCm}
            Maioridade: ${this.maiorIdade()} `)
    }

    setStatus() {
        let opcao = prompt(` Altere as informações recebidas digitando o padrao abaixo:
        1 - nome
        2 - idade
        3 - peso em kg
        4 - altura em cm`)

        switch (opcao) {
            case "1":
                this.nome = prompt(`Escreva o novo nome desejado`)
                break;

            case "2":
                this.idade = prompt(` Digite a nova idade: `)
                break;

            case "3":
                this.peso = prompt(` Informe o peso que deseja incluir: `)
                break;

            case "4":
                this.alturaCm = prompt(` Informe a altura nova desejada: `)
                break;
        }
    }

}
let people = new Pessoa("clodoaldo", 80, 80, 180)
people.apresentarPessoa()
people.maiorIdade()
 people.setStatus()
people.apresentarPessoa()

let people2 = new Pessoa("josefa", 90, 90, 190)
people2.apresentarPessoa()
people2.maiorIdade()
 people2.setStatus()
people2.apresentarPessoa()


