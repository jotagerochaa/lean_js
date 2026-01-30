class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

}
class Cadastro extends Pessoa {
    constructor(nome, idade, setor) {
        super(nome, idade),
            this.setor = setor
    }
     
    cadastrarPessoas() {
         this.nome  = prompt(` Insira nome: `)
         this.idade =  prompt(` Insira idade: `)
         this.setor =  prompt(` Insira setor: `)
    }

    mostrarCadastro() {
        alert(` 
            Seu nome é: ${this.nome}
            Sua idade é: ${this.idade}
            Seu setor é:  ${this.setor}`)
    }


}

let newCadastro = new Cadastro()
let newCadastro2 = new Cadastro()
newCadastro.cadastrarPessoas()
newCadastro.mostrarCadastro()
newCadastro2.cadastrarPessoas()
newCadastro2.mostrarCadastro()


function verificarIdade() {
    x = newCadastro.idade
    y = newCadastro2.idade

    if(x>y){
        alert(` A ${newCadastro.nome} é mais velha`)
    }
    else if (y>x){
        alert(` A pessoa ${newCadastro2.nome} é mais velha`)
    }
    else{
        return 
    }
}
verificarIdade()
