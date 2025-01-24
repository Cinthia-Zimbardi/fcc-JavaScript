const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

const intToRomanNumerals =(intNumber) => {
  const romanNumeralsMap = [
[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
[100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],[10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
            ];
  let romanNumerals = '';
  
  for (let [value, simbol] of romanNumeralsMap)
   {
                const count = Math.floor(intNumber / value);
romanNumerals += simbol.repeat(count);
intNumber %= value;
    }
return romanNumerals;
        }

const romanConvert = () => {
 if (Number.isNaN(parseInt(numberInput.value))) {
  result.innerHTML = '<p class="invalid">Por favor digite um número válido. </p>'} else if(numberInput.value < 1) {
  result.innerHTML = '<p class="invalid">Por favor digite um número maior ou igual a 1. </p>'
  }  else if (numberInput.value > 3999) {
  result.innerHTML = '<p class="invalid">Por favor digite um número menor ou igual a 3999.</p>'
  } else {
  result.innerHTML = `<p class="invalid">${intToRomanNumerals(numberInput.value)}</p>`;
  }
}

convertBtn.addEventListener("click", romanConvert);

numberInput.addEventListener("keydown", (e) => {
  if(e.key === "Enter") {
    romanConvert();
  }
})
