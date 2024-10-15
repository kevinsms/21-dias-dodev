class Aluno {
  nome;
  idade;
  areaAtuacao;
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  apresentar(){
    console.log('Olá, meu nome é: ' + this.nome + " minha idade é: " + this.idade + " a minha área de atuação é: "+ this.areaAtuacao)
  }
}

console.log("========= Cadastro de alunos =========");
let alunoUm = new Aluno("Kevin", "23 anos");
let alunos = [];
let continuar = true;
let indexDeAluno = 0;

while (continuar) {
  let nome = prompt("Insira o nome do aluno:");
  let idade = parseInt(prompt("Insira a idade do aluno"));
  let aluno = new Aluno(nome, idade);
  let areaAtuacao = prompt("Inisira a área de atuação do aluno");
  aluno.areaAtuacao = areaAtuacao;

  alunos[indexDeAluno] = aluno;
  let desejaContinuar = prompt("Insira 1 caso deseje castrar um novo aluno");
  if (desejaContinuar != "1") {
    continuar = false;
  } else {
    indexDeAluno++;
  }
}
