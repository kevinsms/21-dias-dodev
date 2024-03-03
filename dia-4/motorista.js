let nome = prompt('Informe seu nome:');
let idade = prompt('Informe sua idade:');
let motorista = prompt('Tem carta de motorista?');
let carro = prompt('Tem carro?');

if(idade < 18 || motorista === 'não'){
    console.log(`${nome}, você não pode dirigir`)
}else if(idade >=18 && motorista === 'sim' && carro === 'não'){
    console.log(`${nome}, você pode dirigir mas não tem carro`)
}else{
    console.log(`${nome}, você será o motorista!`)
}