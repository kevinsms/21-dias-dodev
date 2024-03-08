let cadastrar = "sim"
let totalNotas = 0;
let qtdAlunos = 0;
let qtdM = 0;
let qtdF = 0;
let nota = 0;
let maiorNota = 0;

do {
    nota = Number(prompt('Digite sua nota:'))
    console.log(nota)
    let sexo = prompt('Digite seu sexo:')
    console.log(sexo)
    cadastrar = prompt('Deseja cadastrar outra nota?')
    if(sexo === 'm'){  
        while(nota > maiorNota){
            maiorNota = nota
        }
        qtdM++
    }else if(sexo === 'f' && nota > 7){
        qtdF++
    }
    qtdAlunos++
    totalNotas += nota;
    if(cadastrar === 'não'){
        cadastrar = 'não'
    }
}while(cadastrar === 'sim')

console.log("Media dos Alunos: " + totalNotas/qtdAlunos)
console.log("Homens que enviaram as notas: "+ qtdM)
console.log("Mulheres que tiveram as notas acima de 7: "+ qtdF)
console.log("Homem que teve a maior nota foi de : "+ maiorNota)
