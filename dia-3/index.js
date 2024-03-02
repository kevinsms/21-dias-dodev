let nome = prompt('Digite seu nome:');
let idade = parseInt(prompt('Digite sua idade:'));
let peso = Number(prompt('Digite seu peso:'));
let altura = Number(prompt('Digite sua altura:'));


let nascimento = 2023 - idade 

let imc = peso / (altura * altura)

console.log('Olá ' + nome + ', você tem ' + idade + ' anos, nasceu em ' + nascimento + ', tem ' + altura + ' de altura, pesa ' + peso + 'kg seu IMC é ' + parseInt(imc) + ' Kg/m2')