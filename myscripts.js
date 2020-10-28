// required global variables
const allExpensesArray = [];


// get elements
const expenseInput = document.getElementById('expenseInput');
const amountInput = document.getElementById('amountInput');
const addButton = document.getElementById('addButton');
const expenseContainer = document.getElementById('expenseContainer');
const totalExpenseHeading = document.getElementById('totalExpenseHeading');




// functions

// get expense item and add to array
function addExpense() {
    
    // call getExpense to get the expense item
    getExpense();
    
    // add expense item to list
    allExpensesArray.push(expenseItem);
    
    // call showExpense to show the list of expense item
    showExpense()
    
    
}

function getExpense() {
    
    // check if the user inputs something or not
    if ( expenseInput.value !== '' && amountInput.value !== '' && parseInt(amountInput.value) > 0) {
        // create expense item as an object
        const expenseId = allExpensesArray.length;  
        const expenseDescription = expenseInput.value;
        const expenseAmount = parseInt(amountInput.value);
        const expenseDate = new Date().toLocaleDateString();
        
        // return object to be used
        return expenseItem = {expenseId, expenseDescription, expenseAmount, expenseDate};
        
    } else {
        
        // message for no or wrong input
        if (expenseInput.value == '') {
            expenseInput.placeholder = 'Please enter your expense';
        } 
        
        if (amountInput.value == '') {
            amountInput.placeholder = 'Please enter some amount';
        }
        
        if (parseInt(amountInput.value) <= 0) {
            alert('Expense can not be negative')
        }
    }
    
    
}

function showExpense() {
    
    // create html to show list item - individual
    expenseContainer.innerHTML = allExpensesArray.slice().reverse().map(expenseItem => {
        return `
        <li class="list-group-item listItem" id="listItem">
        <div class="d-flex align-items-center" id="listItemDetails">
            <div class="p-1 w-100" id='listItemText'>
                <div class="text-wrap font-weight-bold expensItem"> ${expenseItem.expenseDescription} </div>
                <div class="dateCustom"> ${expenseItem.expenseDate} </div>
            </div>
            <div class="p-1 flex-shrink-0 font-weight-bold">$ ${expenseItem.expenseAmount} </div>
            <div class="p-1 flex-shrink-0 font-weight-bold">D</div>
        </div>
        </li>    
    `  
    }).join();
    
    // clear the input fields
    clearInputFields();
    
    // call showTotal to show total
    showTotal();
}

function clearInputFields() {
    expenseInput.value = '';
    amountInput.value = '';
    
    expenseInput.placeholder = 'Expense';
    amountInput.placeholder = 'Amount';
}

function showTotal() {
    // declare total expense
    let totalExpense = 0;
    
    allExpensesArray.forEach( expenseItem => {
        totalExpense += expenseItem.expenseAmount;
    })
    
    totalExpenseHeading.textContent = `$ ${totalExpense}`;
}






// call functions
showExpense();



// event handling
addButton.addEventListener('click', addExpense);
















    
    
    
    