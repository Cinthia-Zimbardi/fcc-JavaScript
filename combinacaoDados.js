 const checkForStraights = (diceValuesArr) => {

let straight = diceValuesArr.sort();
let varAux1 = [];
let varAux2 = [];
let varAux3 = [];
let count = 0;

for (const num of straight) {

  if(count === 0) {
      varAux1.push(num);
  };
  
  if (count === 1) {
    if(num === varAux1[count-1] + 1) {
      varAux1.push(num)
    } else {
      varAux2.push(num)
    } 
  };
  if (count >= 2) {
    if(num === varAux1[count-1] + 1) {
      varAux1.push(num)
  } else if(num === varAux2[count-2] + 1) {
    varAux2.push(num)
  } else {
    varAux3.push(num)
  }
  };
  count++
};

  

 if (varAux1.length === 5) {
   
    updateRadioOption(3, 30);
    updateRadioOption(4, 40);
    updateRadioOption(5, 0)
  } else if(varAux1.length === 4 || varAux2.length === 4 ) {
    
    updateRadioOption(3, 30);
    updateRadioOption(5, 0)
  } else {
    
    updateRadioOption(5, 0)
  }

console.log(straight);
console.log(varAux1);
console.log(varAux2);
console.log(varAux3)
  
};











