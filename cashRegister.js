let cash = document.getElementById("cash");
const purchBtn = document.getElementById("purchase-btn");
let changeDue = document.getElementById("change-due");
const totalPurch = document.getElementById("price");
const drawerCash = document.getElementById("cid");


let price = 3.26;
let cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];

const totalDesk = () => {
  let total = 0;
    for(let i = 0; i< cid.length; i++) {
    total += Number(cid[i][1]);
    
  };
  return total
};

let totalCid = totalDesk().toFixed(2);


totalPurch.innerText =`${price}`;
drawerCash.innerHTML = `<p><strong>Troco na Gaveta:</strong></p> \n<p>Pennies: ${cid[0][1]} </p><p>Nickels: ${cid[1][1]}</p><p>Dimes: ${cid[2][1]}</p><p>Quarters: ${cid[3][1]}</p><p>Ones: ${cid[4][1]}</p><p>Fives: ${cid[5][1]}</p><p>Tens: ${cid[6][1]}</p><p>Twenties: ${cid[7][1]}</p><p>Hundreds: ${cid[8][1]}</p>`;

      let hundCash = 0;
      let twentyCash = 0;
		  let tenCash = 0;
		  let fiveCash = 0;
		  let oneCash = 0;
		  let quarterCash = 0;
		  let dimeCash = 0;
		  let nickelCash = 0;
		  let pennyCash = 0;
		  
					   
		  let rest = 0;
		  let rest1 = 0;
		  let rest2 = 0;
		  let rest3 = 0;
		  let rest4 = 0;
		  let rest5 = 0;
		  let rest6 = 0;
		  let rest7 = 0;		   
		  let rest8 = 0;


const getChange = () => {
const change = (cash.value - price).toFixed(2);


	if(cash.value < price) {
		alert("Customer does not have enough money to purchase the item");
    } else if(cash.value == price ) {
		changeDue.innerText = `
    No change due - customer paid with exact cash`
	} else if (Number(totalCid) < Number(change)) {
    changeDue.innerText = `
      Status: INSUFFICIENT_FUNDS`      
  } else { 
      const changeCalc = () => {
          hundCash = Math.floor(change/100);
          rest = (change%100).toFixed(2);
            if((hundCash*100) > cid[8][1]) {
              rest = (Number((change%100).toFixed(2))) + (hundCash*100 - cid[8][1]);
              hundCash = cid[8][1]/100;
            };    
            
          twentyCash = Math.floor(rest/20);
			    rest1 = (rest%20).toFixed(2);
             if((twentyCash*20) > cid[7][1]) {
              rest1 = (Number((rest%20).toFixed(2))) + (twentyCash*20 - cid[7][1]);
              twentyCash = cid[7][1]/20;
              };
            
          tenCash = Math.floor(rest1/10);
			    rest2 = (rest1%10).toFixed(2);
               if((tenCash*10) > cid[6][1]) {
              rest2 = (Number((rest1%10).toFixed(2))) + (tenCash*10 - cid[6][1]);
              tenCash = cid[6][1]/10;
            };
            
          fiveCash = Math.floor(rest2/5);
			    rest3 = (rest2%5).toFixed(2);
               if((fiveCash*5) > cid[5][1]) {
              rest3 = (Number((rest2%5).toFixed(2))) + (fiveCash*5 - cid[5][1]);
              fiveCash = cid[5][1]/5;
            };
           
          oneCash = Math.floor(rest3/1);
			    rest4 = (rest3%1).toFixed(2);
               if((oneCash*1) > cid[4][1]) {
              rest4 = (Number((rest3%1).toFixed(2))) + (oneCash*1 - cid[4][1]);
              oneCash = cid[4][1]/1;
            };
            
					quarterCash = Math.floor(rest4/0.25);
		    	rest5 = (rest4%0.25).toFixed(2);
                if((quarterCash*0.25) > cid[3][1]) {
              rest5 = (Number((rest4%0.25).toFixed(2))) + (quarterCash*0.25 - cid[3][1]);
              quarterCash = cid[3][1]/0.25;
            };

          dimeCash = Math.floor(rest5/0.10);
		    	rest6 = ((rest5 - Math.trunc(rest5 / 0.10)* 0.10)).toFixed(2);
              if((dimeCash*0.10) > cid[2][1]) 
              {
              rest6 = (Number(((rest5 - Math.trunc(rest5 / 0.10)* 0.10)).toFixed(2))) + (dimeCash*0.10 - cid[2][1]);
              dimeCash = cid[2][1]/0.10;
           };
           
					nickelCash = Math.floor(rest6/0.05);
			    rest7 = ((rest6 - Math.trunc(rest6 / 0.05)* 0.05)).toFixed(2);
                if((nickelCash*0.05) > cid[1][1]) {
              rest7 = (Number(((rest6 - Math.trunc(rest6 / 0.05)* 0.05)).toFixed(2))) + (nickelCash*0.05 - cid[1][1]);
              nickelCash = cid[1][1]/0.05;
            };

      		pennyCash = Math.floor(rest7/0.01);
			        if((pennyCash*0.01) > cid[0][1]) {
              rest8 = (Number(((rest7 - Math.trunc(rest7 / 0.01)* 0.01)).toFixed(2))) + (pennyCash*0.01 - cid[0][1]);
              pennyCash = 0;
            };
            
      };
        if(change>=100) {
          changeCalc()
       } else if(change >= 20) {
         changeCalc()
      } else if (change >= 10) {
          changeCalc()
      } else if(change >= 5) {
         changeCalc()
      } else if(change >= 1) {
          changeCalc()
      } else if(change >= 0.25) {
          changeCalc()
      } else if(change >= 0.1) {
          changeCalc()
      } else if(change >= 0.05) {
         changeCalc()
      } else if(change >= 0.01) {
         changeCalc()
      };
        
      if(pennyCash === 0 && rest8 != 0) {
         changeDue.innerText =`Status: INSUFFICIENT_FUNDS`;
        } else if(totalDesk().toFixed(2) == change) {
        changeDue.innerText = `Status: CLOSED${hundCash*100 >0 ? `
    
    ONE HUNDRED: $${hundCash*100}`: ``}${twentyCash*20 >0 ? `
    TWENTY: $${twentyCash*20}`:``}${tenCash*10 >0 ? ` 
    TEN: $${tenCash*10}`:``}${fiveCash*5 >0 ? ` 
    FIVE: $${fiveCash*5}`:``}${oneCash*1 >0 ? ` 
    ONE: $${oneCash*1}`:``}${quarterCash*0.25 >0 ? `
    QUARTER: $${quarterCash*0.25}`:``}${dimeCash*0.1 >0 ? ` 
    DIME: $${dimeCash*0.1}`:``}${nickelCash*0.05 >0 ? ` 
    NICKEL: $${nickelCash*0.05}`:``}${pennyCash*0.01 >0 ? ` 
    PENNY: $${pennyCash*0.01}`: ``}`
       } else {
      changeDue.innerText = `Status: OPEN${hundCash*100 >0 ? `
    ONE HUNDRED: $${hundCash*100}`: ``}${twentyCash*20 >0 ? `
    TWENTY: $${twentyCash*20}`:``}${tenCash*10 >0 ? ` 
    TEN: $${tenCash*10}`:``}${fiveCash*5 >0 ? ` 
    FIVE: $${fiveCash*5}`:``}    
    ${oneCash*1 >0 ? ` ONE: $${oneCash*1}`:``}${quarterCash*0.25 >0 ? `
    QUARTER: $${quarterCash*0.25}`:``}${dimeCash*0.1 >0 ? ` 
    DIME: $${dimeCash*0.1}`:``}${nickelCash*0.05 >0 ? ` 
    NICKEL: $${nickelCash*0.05}`:``}${pennyCash*0.01 >0 ? ` 
    PENNY: $${pennyCash*0.01}`: ``}`
       };

      drawerCash.innerHTML = `<p><strong>Troco na Gaveta:</strong></p> \n<p>Pennies: ${((cid[0][1])-(pennyCash*0.01)).toFixed(2)} </p><p>Nickels: ${((cid[1][1])-(nickelCash*0.05)).toFixed(2)}</p><p>Dimes: ${((cid[2][1])-(dimeCash*0.1)).toFixed(2)}</p><p>Quarters: ${((cid[3][1])-(quarterCash*0.25)).toFixed(2)}</p><p>Ones: ${((cid[4][1])-(oneCash*1)).toFixed(2)}</p><p>Fives: ${((cid[5][1])-(fiveCash*5)).toFixed(2)}</p><p>Tens: ${((cid[6][1])-(tenCash*10)).toFixed(2)}</p><p>Twenties: ${((cid[7][1])-(twentyCash*20)).toFixed(2)}</p><p>Hundreds: ${((cid[8][1])-(hundCash*100)).toFixed(2)}</p>`;

  cid = [
  ['PENNY', ((cid[0][1])-(pennyCash*0.01)).toFixed(2)],
  ['NICKEL', ((cid[1][1])-(nickelCash*0.05)).toFixed(2)],
  ['DIME', ((cid[2][1])-(dimeCash*0.1)).toFixed(2)],
  ['QUARTER', ((cid[3][1])-(quarterCash*0.25)).toFixed(2)],
  ['ONE', ((cid[4][1])-(oneCash*1)).toFixed(2)],
  ['FIVE', ((cid[5][1])-(fiveCash*5)).toFixed(2)],
  ['TEN', ((cid[6][1])-(tenCash*10)).toFixed(2)],
  ['TWENTY', ((cid[7][1])-(twentyCash*20)).toFixed(2)],
  ['ONE HUNDRED', ((cid[8][1])-(hundCash*100)).toFixed(2)]
]; 
	
	}
console.log(totalCid);
console.log(change);
console.log(pennyCash);
console.log(rest8)
};
			

purchBtn.addEventListener("click", getChange);

cash.addEventListener("keydown", (e) => {
  if(e.key === "Enter") {
    getChange()
  }
});


