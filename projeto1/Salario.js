// função que receba quantidade de meses trabalhados e o salario, retornando o calculo do 13 salario


function ContarSalario(valor,mes){

    final = (valor/12) * mes
  console.log (" De acordo com os dados informados, sua contribuição final recebida sera de R$" + final)
}
ContarSalario(2500,12)