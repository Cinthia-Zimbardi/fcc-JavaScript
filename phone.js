const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const phoneValidation = event => {
     
    const number = userInput.value.trim();

    const regex1 = /^1?\s?(?:\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;

    if (userInput.value === "") {
    alert("Please provide a phone number") } else if (regex1.test(number)) {
        resultsDiv.classList.add('show');
        resultsDiv.innerText =`Valid US number: ${userInput.value}`;
    } else {
        resultsDiv.classList.add('show');
        resultsDiv.innerText =`Invalid US number: ${userInput.value}`;
    } 
}


  const clearInfo = () => {
    resultsDiv.innerText = "";
    userInput.value = ""
};

checkBtn.addEventListener("click", phoneValidation);

userInput.addEventListener("keydown", (e) => {
  if(e.key === "Enter") {
    phoneValidation()
  }
});

clearBtn.addEventListener("click", clearInfo);