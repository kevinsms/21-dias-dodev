let numeros = [];
let posicaoDoArray = 0;
let numero;

while(posicaoDoArray < 5){
    numero = prompt('Digite um numero')
    numeros[posicaoDoArray] = numero
    posicaoDoArray++
}
console.log("Array normal " + numeros)
console.log("Array invertido " + numeros.reverse())