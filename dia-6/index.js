let exercicio = Number(prompt('Qual exercicio quer testar ? (1-) (2-) (3-) (4-)'))
let numero = Number(prompt('Digite um numero inteiro positivo:'))
switch (exercicio) {

    case 1:
        for (let i = 0; i <= numero; i++) {
            console.log(i)
        }
        break;
    case 2:
        for (let i = 0; i <= 50; i += 5) {
            console.log(i)
        }
        break;
    case 3:
        for (let i = 50; i >= 0; i -= 5) {
            console.log(i)
        }
        break;
    case 4:
        //Faça um algoritmo utilizando a estrutura de repetição FOR que receba 1 número e exiba na tela qual o resultado da sua tabuada e dos próximos 2 números.
        for (let i = numero; i <= numero + 2; i++) {
            console.log('tabuada do número: ' + i)
            for (let j = 0; j <= 10; j++) {
                console.log(i + " X " + j + " = " + (i * j))
            }
        }
        break;
    default:
        break;
}
