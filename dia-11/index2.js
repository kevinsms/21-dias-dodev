/* 1 - Crie três arrays, um para guardar  os modelos, um para guardar os anos e um para guardar os valores do carro
2 - Utilizando o WHILE, peça para o usuário cadastrar novos carros(modelo, ano e valor), popule os 3 arrays nas mesmas posições.
3 - Seu usuário deve definir quando parar de inserir informações.
4 - Exiba o nome, ano e valor dos carros inseridos.
       ex: Celta, 2020 Valor: 50.000
5 - Ordene seus vetores pelo preço dos carros. (Aqui você deve usar seu algoritmo de ordenação, não use os nativos do javascript, como o OrderBy */


let modelos = []
let anos = []
let valores = []
let continuar = true;
let contador = 0;

while(continuar){
    let modelo = prompt('Digite o modelo do carro: ')
    modelos[contador] = modelo
    let ano = prompt('Digite o ano do carro: ')
    anos[contador] = ano
    let valor = parseFloat(prompt("Digite o valor do carro: "))
    valores[contador] = valor
    contador++

    let resposta = prompt('Deseja inserir outro carro? (s/n)')
    if(resposta == 'n'){continuar = false}
}

console.log('Carros cadastrados: ')
for(let i = 0; i< modelos.length; i++){
    console.log(`Modelo:${modelos[i]} - Ano:${anos[i]} - Valor:${valores[i]}`)
} 

for(let i = 0; i < valores.length -1;i++){
    for(let j = 0; j < valores.length -i-1; j++){
        if(valores[j] > valores[j+1]){
            
            let modeloMAiorValor = modelos[j]
            modelos[j] = modelos[j+1]
            modelos[j+1] = modeloMAiorValor

            let anoMaiorValor = anos[j]
            anos[j] = anos[j+1]
            anos[j+1] = anoMaiorValor

            let maiorValor = valores[j]
            valores[j] = valores [j+1]
            valores[j+1] = maiorValor

        }
    }
}

console.log("carros ordenados pelo preço")
for(let i = 0; i<modelos.length;i++){
    console.log(`Modelo: ${modelos[i]} -Ano: ${anos[i]} -Valor: ${valores[i]}`)
}
