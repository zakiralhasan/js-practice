document.getElementById('diposit-submit-btn').addEventListener('click', function(){
    const newDipositValue = getInputFieldValue('diposit-input-field');
    const previousDipositValue = getTextFieldValue('diposit-field');

    if(newDipositValue > 0){
        const currentDipositValue = newDipositValue + previousDipositValue;

        setTextFieldValue('diposit-field', currentDipositValue);
    
        const previousBalanceValue = getTextFieldValue('balance-field');
        const newBalanceValue = previousBalanceValue + newDipositValue;
    
        setTextFieldValue('balance-field', newBalanceValue);
    }else{
        alert('Please enter a positive number')
    };
});