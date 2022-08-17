document.getElementById('witdraw-submit-btn').addEventListener('click', function(){
    // withdraw input field get 
    const withdrawInputField = document.getElementById('withdraw-input-field');
    const withdrawInputFieldValue = withdrawInputField.value;
    withdrawInputField.value = '';
    
    // withdraw display field get 
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldValue = withdrawField.innerText;

    // current balance get element and convertion 
    const balanceField = document.getElementById('balance-field');
    const balanceFieldValue = balanceField.innerText;
    const balanceFieldNumberValue = parseFloat(balanceFieldValue);

    if(withdrawInputFieldValue < balanceFieldNumberValue && withdrawInputFieldValue > 0){
    // update withdraw display falue 
    const totalWithdrawBalance = parseFloat(withdrawFieldValue) + parseFloat(withdrawInputFieldValue);
    withdrawField.innerText = totalWithdrawBalance;

    // update balance value display 
    const balanceFieldcurrentValue = balanceFieldNumberValue - parseFloat(withdrawInputFieldValue);
    balanceField.innerText = balanceFieldcurrentValue;
    }else if(withdrawInputFieldValue < 0){
        alert('Please enter a positive number!')
    }else{
        alert('Your withdraw amount is greater then your currnent balance!')
    };
})