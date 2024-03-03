let fome = prompt('Você está com fome ?');
let dinheiro = prompt('Você tem dinheiro?');
let restaurante = prompt('Restaurante está aberto ?');

if(fome === 'não' || dinheiro === 'não' ){
    console.log('Hoje o janta será em casa')
}else if(dinheiro === 'sim' && restaurante === 'sim'){
    console.log('Hoje o jantar será no seu restaurante preferido!')
}else{
    console.log('Peça um delivery!')
}