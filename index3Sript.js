

 document.querySelector("button").addEventListener("click", balanceCalculator)

 function balanceCalculator(){
    var balance=1000;
    var deposit = window.prompt("Enter deposit amount: ");
    balance = balance + parseInt(deposit);
    alert("Your current balance is " + balance)
 }
