document.getElementById('cashout-btn')
.addEventListener('click', function(){
    // 1. get the agent number and validate
    const cashoutNumberInput = document.getElementById('cashout-number');
    const cashoutNumber = cashoutNumberInput.value;
    console.log(cashoutNumber);
    if(cashoutNumber != 11){
        alert('Invalid Agent Number');
        return;
    }

    // 2.get the amount
    const cashoutAmountInput = document.getElementById('cashout-amount');
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount)

    // 3.get the current balance
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    console.log(balance)

    // 4.calculate new balance
    const newBalance = Number(balance) - Number(cashoutAmount);

    if(newBalance < 0){
         alert('Invalid Amount');
         return;
    }
    // 5.get the pin and verify
    const cashoutPinInput = document.getElementById('cashout-pin');
    const cashoutPin = cashoutPinInput.value;
    
    // 5.1 if true >>show an alert >> set new balance
    if(cashoutPin === '1234'){
        alert('Cashout Successful');
        console.log('newBalance', newBalance);
        balanceElement.innerText = newBalance;
    }else{
    // 5.2 if false >>show an alert >> Return
    alert('Invalid Pin Number');
    return;
    }


})