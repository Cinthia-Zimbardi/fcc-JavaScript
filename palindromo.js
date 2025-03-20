const btnCheck = document.getElementById("check-btn");
const textCheck = document.getElementById("text-input");
const resultText = document.getElementById("result");

const checkPalindromo = (enter) => {
  let palindromo = textCheck.value;
  let palindromoAux;
console.log(enter);
if (enter === "Enter") {
  if (palindromo.length === 0) {
    resultText.innerText = 'Please input a value';
    resultText.style.background = "brown";
    alert('Insira um valor');
    return;
  }
palindromo = palindromo.normalize("NFD");
palindromo = palindromo.replace(/[^a-zA-Z0-9]/g, '');
palindromo = palindromo.toLowerCase();
  palindromoAux = palindromo.split('').reverse().join('');
  if(palindromo === palindromoAux) {
resultText.innerText = `${textCheck.value} é um palindromo.`
resultText.style.background = "green";
  } else {
    resultText.innerText = `${textCheck.value} não é um palindromo`
resultText.style.background = "red";
  };

};
  return;
}

btnCheck.addEventListener('click', checkPalindromo);
