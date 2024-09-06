let loanAmount = document.getElementById("loan-amount");
let interestRate = document.getElementById("interest-rate");
let monthsElement = document.getElementById("months");
let outputElement = document.getElementById("output-amount");
let buttonElement = document.getElementById("calculate-btn");
let clearAllElement = document.getElementById("clear-all");

//calculate function
buttonElement.addEventListener("click", calculateNow);
function calculateNow() {
  if (loanAmount.value || interestRate.value || monthsElement.value) {
    let interest = (interestRate.value / 100) * loanAmount.value;
    let totalAmount = Math.round(
      (interest + parseFloat(loanAmount.value)) / monthsElement.value
    );
    outputElement.textContent = `R${totalAmount}`;
  } else {
    alert("Please Enter All The Input Fields");
  }
}

//clear function
clearAllElement.addEventListener("click", clearAll);
function clearAll() {
  loanAmount.value = "";
  interestRate.value = "";
  monthsElement.value = "";
  outputElement.textContent = "";
}
