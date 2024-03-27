let condicao;
let salario;
let nome;
let idade;

do {
    nome = prompt('Digite seu nome:');
    idade = parseInt(prompt('Digite sua idade:'));
    salario = parseFloat(prompt('Digite seu salario: R$'));
    console.log(`Seu nome é ${nome}`);
    console.log(`Sua idade é de ${idade} anos`);
    console.log(`Seu salario é de R$${salario}`);
    condicao = parseInt(prompt('Informações estão corretas? 1-(SIM) 2-(NÃO)'));
} while (condicao === 2);

let aumento = 0.015;

console.log('Previsão salarial para os próximos 10 anos:');

for (let i = 1; i <= 10; i++) {
    salario += salario * aumento;
    aumento *= 2;
    console.log(`${2023 + i} = R$${salario.toFixed(2)}`);
}
