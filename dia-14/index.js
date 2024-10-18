function nomeSalario() {
    let nome = prompt('Digite seu nome: ')
    let salario = parseFloat(prompt('Digite seu salário: '))
    salario = calcularAumento(nome, salario) // Recebe o novo salário
    console.log(`Nome: ${nome}, Novo salário: ${salario}`)
}

function calcularAumento(nome, salario) {
    if (salario <= 1500) {
        salario += salario * 0.2
    } else if (salario > 1500 && salario <= 2000) {
        salario += salario * 0.15
    } else if (salario > 2000 && salario <= 3000) {
        salario += salario * 0.10
    } else if (salario > 3000) {
        salario += salario * 0.5
    }
    return salario // Retorna o novo salário
}

nomeSalario()
