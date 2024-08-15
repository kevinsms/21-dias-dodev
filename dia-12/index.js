let nomes = [];
let senhas = [];
let condition = true;
let count = 0;
let nome = '';

while (condition) {
    let operacao = Number(prompt('O que deseja: 1-)Cadastrar 2-)Login 3-)excluir 4-)Encerrar'))

    switch (operacao) {
        case 1:
            nomes[count] = prompt('Digite seu nome: ')
            senhas[count] = Number(prompt('Digite uma senha: '))
            count++
            break;
        case 2:
            nome = prompt('Digite seu nome: ')
            let senha = Number(prompt('Digite sua senha: '))
            for (let i = 0; i < nomes.length; i++) {
                if (nome === nomes[i] && senha == senhas[i]) {
                    console.log('Login com sucesso!')
                } else {
                    console.log('Login inválido!')
                }
            }
            break;
        case 3:
            nome = prompt('Digite seu nome para exclusão: ')
                for(let i = 0; i < nomes.length; i++){
                    if(nome === nomes[i]){
                        nomes.splice(i,1)
                        senhas.splice(i,1)

                        alert("Cadastro excluido com sucesso!")
                    }
                }
            break;
        case 4:
            condition = false 
            break;

    }


}