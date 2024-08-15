let nome = [];
let grades = [];
let count = 0;
let condition = true;
let currentGrades;// = 0;
let totalGrades = 0;
do{
    nome[count] = prompt('Enter your name: ')
    currentGrades = Number(prompt('Enter your grades:'))
    grades[count] = currentGrades
    totalGrades += currentGrades
    count++
    condition = Number(prompt('Enter a option 1-Continue,2-Stop: '))
    if(condition==1){}else if(condition==2){condition=false}
}while(condition)

for(let i = 0; i < nome.length; i++){
    console.log(`${nome[i]} tirou a nota ${grades[i]}`)
}
console.log(`A soma das notas é de ${totalGrades} e a média geral é de ${totalGrades/count}`)