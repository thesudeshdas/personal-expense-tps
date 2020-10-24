// required variable
let totalExpense = 0;






// get elements to work on
const addExpenseBtn = document.querySelector('#addExpenseBtn');
const amountInput = document.querySelector('#amountInput');
const headingTotal = document.querySelector('#headingTotal');






// functions

// add expense to total
function addExpenseToTotal() {
    // read value from input 
    let expense = parseInt(amountInput.value);


   
    
    // add to total
    totalExpense += expense;
    
    
    // show in heading total
    headingTotal.textContent = totalExpense;
    
    
    console.log({expense, totalExpense})
}








// event listening
addExpenseBtn.addEventListener('click', addExpenseToTotal, false);