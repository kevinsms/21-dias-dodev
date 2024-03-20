//Escreva um algoritmo onde seu usuário deve informar nome, idade, peso, altura e profissão, a partir disso você deve exibir um texto com todas essas informações. 
//Ex: Usuário inseriu nome: Giovanni, idade: 21, peso: 74kg, profissão: Programador, altura: 1.83, Você exibe: Olá Giovanni, você tem 21 anos, é programador, 
//tem 1.83M de altura e pesa 74kg.
//Verifique se o usuário é maior ou menor de idade, se ele for maior exiba na tela “Está liberado para tomar umas geladas”, se ele for menor exiba “Sem gelada para você”.
//Utilize a idade informada pelo usuário, e mostre sua idade em meses, semanas e dias. Considere ano com 365 dias, mês com 30 dias e semana com 7 dias. 

let nome = prompt('Digite seu nome:')
let idade = Number(prompt('Digite sua idade:'))
let peso = Number(prompt('Digite seu peso:'))
let altura = Number(prompt('Digite seu altura:'))
let profissao = prompt('Digite sua profissão:')

console.log(`Olá ${nome}, você tem ${idade} anos, é ${profissao}, tem ${altura} de altura e pesa ${peso}kg.`)

if (idade >= 18) {
    console.log('Está liberado para tomar umas geladas')
} else {
    console.log('Sem gelada para você')
}

let idade_meses = idade * 12
let idade_semanas = idade * 52
let idade_dias = idade * 365

console.log(`sua idade em meses ${idade_meses}`)
console.log(`sua idade em semanas ${idade_semanas}`)
console.log(`sua idade em dias ${idade_dias}`)

//Calcule o IMC do seu usuário e informe a faixa dele.
//*O IMC é a relação entre peso e altura e o cálculo é feito de acordo com a fórmula: IMC = peso / (altura x altura)
//O peso deve estar em kg e a altura em metros, e o resultado é dado em kg/m2. Depois de obter o resultado, é possível verificar em que faixa o IMC se encontra, podendo indicar:
//      - Magreza, quando o resultado é menor que 18,5 kg/m2;
//      - Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;   
//      - Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2;
//      - Obesidade, quando o resultado é maior que 30 kg/m2.
//A partir da idade informada descubra o ano que o seu usuário nasceu(Considere o ano atual como 2023, faça essa conta usando apenas o ano).


let imc = peso / (altura * altura)

if (imc < 18.5) {
    console.log('Magreza')
} else if (imc >= 18.5 && imc < 24.9) {
    console.log('Normal')
} else if (imc >= 24.9 && imc <= 30) {
    console.log('Sobrepeso')
} else {
    console.log('Obesidade')
}
