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
  result.innerHTML = '<p class="invalid">Please enter a valid number. </p>'} else if(numberInput.value < 1) {
  result.innerHTML = '<p class="invalid">Please enter a number greater than or equal to 1. </p>'
  }  else if (numberInput.value > 3999) {
  result.innerHTML = '<p class="invalid">Please enter a number less than or equal to 3999.</p>'
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
