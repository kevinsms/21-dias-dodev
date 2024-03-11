saldo = 1000;
nome = prompt('Digite seu nome:');
cpf = Number(prompt('Digite seu CPF:'));
maiorValor = 0;
qtdvalor = 0;
ValorTotal = 0;

do {
    valor = Number(prompt('Digite um valor:'));
    if(valor < 0){
        console.log('Não é permitido valores negativos')
    }else{
        ValorTotal += valor
        qtdvalor++
        if (valor >= maiorValor) {
            maiorValor = valor
        }
        opcao = Number(prompt('(1-Saque)- (2-Depósito)'));
    
        switch (opcao) {
            case 1:
                if(valor > saldo){
                    console.log('Não foi possivel realizar essa quantidade')
                }else{
                    console.log('Realizando Saque... de ' + valor)
                    saldo -= valor
                }
                break;
            case 2:
                console.log('Realizando Depósito... de ' + valor)
                saldo += valor
                break;
            default:
                console.log('Opção invalida...')
                break;
        }
        continuar = Number(prompt('Deseja continuar ? (1-Sim)(2-Não)'));
        console.log("Saldo total é de: R$" + saldo + " Reais")
    }
    
} while (continuar === 1)
console.log("Maior valor foi de: " + maiorValor)
console.log("Média dos valores foi de: " + (ValorTotal/qtdvalor))