let numeros = [];
let continuar = true;
let posicaoDoArray = 0;
let numeroPosicao = []

let numero = prompt('Insira um numero');

while(posicaoDoArray < 10){

    numeros[posicaoDoArray] = prompt('Insira um numero no Array')

    if(numero === numeros[posicaoDoArray]){
        numeroPosicao.push(posicaoDoArray)
    }
    posicaoDoArray++
}

console.log("O numero escolhido foi o " + numero + " e foi encontrado nos indices " + numeroPosicao)





    
