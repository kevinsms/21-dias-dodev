let nomes = [];
let continuar = true;
let posicaoDoArray = 0;

while(continuar){
    let nomeInserido = prompt('Insira um nome');
    nomes[posicaoDoArray] = nomeInserido

    let desejaContinuar = prompt('Insira 1 caso deseja adicionar um novo nome')
    if(desejaContinuar != '1'){
        continuar = false;
        continue;
    }
    posicaoDoArray++;
}