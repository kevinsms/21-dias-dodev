let exercicio = Number(prompt('Qual exercicio quer testar ? (1-Calculadora DoDev) (2-DodDev thru)'))
let valor;
let opcao;

switch (exercicio) {
    case 1:
        n1 = Number(prompt('Digite o primeiro numero:'))
        n2 = Number(prompt('Digite o segundo numero:'))
        opcao = Number(prompt('Qual operação matemática deseja ? (1 +) (2 -) (3 *) (4 /)'))
        let resultado;
        switch (opcao) {
            case 1:
                resultado = n1 + n2
                break;
            case 2:
                resultado = n1 - n2
                break;
            case 3:
                resultado = n1 * n2
                break;
            case 4:
                resultado = n1 / n2
                break;
            default:
                break;
        }
        console.log(`O Resultado é: ${resultado}`)
        break;
    case 2:
        opcao = Number(prompt('Qual serviço gostaria ? (1- Abastecer com gasolina) (2-Abastecer com álcool) (3-calibrar os pneus)'))
        switch (opcao) {
            case 1:
                valor = Number(prompt('Qual valor deseja abastecer de Gasolina?'))
                console.log(`Você abasteceu ${valor * 5} litros de gasolina`)
                break;
            case 2:
                valor = Number(prompt('Qual valor deseja abastecer de álcool?'))
                console.log(`Você abasteceu ${valor * 3} litros de álcool`)
                break;
            case 3:
                console.log('pneus calibrados com sucesso')
                break;
            default:
                console.log('Opção Invalida!!')
                break;
        }

        break;
    default:
        console.log('Opção Invalida!!!')
        break;
}