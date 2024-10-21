let nomes = [] 
let passwords = []

function solicitacao(){
 let result = parseInt(prompt("Escolha a opção desejada: 1-Cadastrar 2-Login 3-Excluir 4-Encerrar"))
 return result   
}

function cadastro(){
    let nome = prompt("Digite seu nome: ")
    let password = prompt("Digite sua melhor senha: ")
    
    nomes.push(nome)
    passwords.push(password)
}

function login(name,password){
    let index = nomes.indexOf(name)
    if(index !== -1 && passwords[index] == password){
        return true
    }else{
        return false
    }
}

function exclusao(name){
    let index = nomes.indexOf(name)
    if(index !== -1){
        nomes.splice(index,1)
        passwords.splice(index,1)
        console.log("Cadastro excluído com sucesso!")
    }else{
        console.log("Usuário não encontrado!")
    }
    
}

let continuar = true;

while(continuar){
    let opcao = solicitacao();

    switch(opcao) {
        case 1:
            cadastro();
        break;
        case 2:
            let nome = prompt("Digite seu nome: ")
            let senha = prompt("Digite sua senha")
            let loginSucesso = login(nome,senha);
            if(loginSucesso){
                console.log("Login feito com sucesso")
            }else{
                console.log("Nome ou senha incorretos!")
            }
            break;
        case 3:
            let nomeExcluir = prompt("Digite seu nome: ")
            exclusao(nomeExcluir)
            break;  
        case 4:
            continuar = false
            break;
        default:
            console.log("Opção inválida. Tente novamente");
            break;
    }
}