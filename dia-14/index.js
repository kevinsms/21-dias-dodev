var nome
var salario

function perguntarColaborador() {
    nome = prompt('Digite o nome do colaborador: ')
    salario = parseFloat(prompt('Digite o sálario do colaborador: '))
    calcularAumentoSalario(nome, salario) // Recebe o novo salário
}

function calcularAumentoSalario(nome, salario) {
    var aumento = 0;

    if (salario <= 1500) {
        aumento = 0.2;
    } else if (salario > 1500 && salario <= 2000) {
        aumento = 0.15;
    } else if (salario > 2000 && salario <= 3000) {
        aumento = 0.1;
    } else if (salario > 3000) {
        aumento = 0.05
    }

    var novoSalario = salario + (salario * aumento )
    console.log("Nome do colabirador: " + nome);
    console.log("Salário: R$ " + salario);
    console.log("Aumento: " + (aumento * 100) + "%");
    console.log("Salário reajustado: R$"+ novoSalario)
    perguntarNovamente()

}

function perguntarNovamente(){
    var resposta = prompt("Deseja calcular novamente? (s/n)");

    if(resposta == "s"){
        perguntarColaborador()
    }else{
        console.log("Progama encerrado.")
    }
}

perguntarColaborador()