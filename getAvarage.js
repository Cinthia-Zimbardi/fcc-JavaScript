/*Calculadora de média*/


function getAverage(scores) {
let somaScores = 0;
let total = 0;
for (let i = 0; i <= scores.length-1; i++) {

    somaScores = somaScores + scores[i];
}
total = (somaScores / scores.length);
return total;

}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));



/*Conversor de notas*/
function getGrade(score) {
let grade;

if (score <= 59) {
  grade = "F";
} else if (score >= 60 && score <= 69) {
  grade = "D";
} else if (score >= 70 && score <= 79) {
  grade = "C";
} else if (score >= 80 && score <= 89) {
  grade = "B";
} else if (score >= 90 && score <= 99) {
  grade = "A";
} else if (score = 100) {
  grade = "A++";
}

return grade;
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));



/*Verificação se aluno foi aprovado (true) ou reprovado (false), sendo reprovado com grade F*/
function hasPassingGrade(score) {
let grade = getGrade(score);  
let passing = true;

if (grade == "F") {
  passing = false;
}
return passing;
}


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));