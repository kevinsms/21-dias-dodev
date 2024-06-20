let numeros = [];
let posicaoDoArray = 0;
let numero;
let tamanhoArray;

tamanhoArray = prompt('Digite o tamanho do Array')

while(posicaoDoArray < tamanhoArray){
    numero = prompt('Digite um numero')
    numeros[posicaoDoArray] = numero
    posicaoDoArray++
}
console.log("Array normal " + numeros)
console.log("Array invertido " + numeros.reverse())