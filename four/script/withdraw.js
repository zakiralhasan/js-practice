document.getElementById('witdraw-submit-btn').addEventListener('click', function(){
    const newWithdrawValue = getInputFieldValue('withdraw-input-field');
    const previousWithdrawValue = getTextFieldValue('withdraw-field');

    if(newWithdrawValue > 0 && newWithdrawValue < previousWithdrawValue){
        const currentWithdrawValue = newWithdrawValue + previousWithdrawValue;

        setTextFieldValue('withdraw-field', currentWithdrawValue);
    
        const previousBalanceValue = getTextFieldValue('balance-field');
        const newBalanceValue = previousBalanceValue - currentWithdrawValue;
    
        setTextFieldValue('balance-field', newBalanceValue);
    }else if(newWithdrawValue <= 0){
        alert('Please enter a positive number');
    }else{
        alert('Your amount is greater then your current balance')
    };
});