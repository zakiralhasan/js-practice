document.getElementById('diposit-submit-btn').addEventListener('click', function(){
    // diposit input field get 
    const dipositIputField = document.getElementById('diposit-input-field');
    const dipositIputFieldValue = dipositIputField.value;
    dipositIputField.value = '';

    // diposit display field get 
    const dipositField = document.getElementById('diposit-field');
    const dipositFieldValue = dipositField.innerText;

    // current balance get element and convertion 
    const balanceField = document.getElementById('balance-field');
    const balanceFieldValue = balanceField.innerText;
    const balanceFieldNumberValue =parseFloat(balanceFieldValue);

    if(dipositIputFieldValue > 0){
    // update diposit value display 
    const totalDipositBalance = parseFloat(dipositIputFieldValue) + parseFloat(dipositFieldValue);
    dipositField.innerText = totalDipositBalance;

    // update balance value display 
    const balanceFieldcurrentValue = balanceFieldNumberValue + parseFloat(dipositIputFieldValue);
    balanceField.innerText = balanceFieldcurrentValue;
    }else{
        alert('Please enter a positive value!');  
    };
})