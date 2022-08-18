// for deactive discount button 
document.getElementById('discount-price-input').addEventListener('keyup', function(event){
    event.target.value;
    if(event.target.value == 'Dom'){
        document.getElementById('discount-btn').removeAttribute('disabled');

    }else{
        document.getElementById('discount-btn').setAttribute('disabled','true');
    };
});
// for discount calculation 
document.getElementById('regular-price-input').addEventListener('keyup', function(event){
    const regularPriceInputValueForDiscount = event.target.value;  
    
    document.getElementById('discount-btn').addEventListener('click', function(){
        
             if(regularPriceInputValueForDiscount == ''){
                const getRegularPriceTextFieldValue = getTexedFieldValue('regular-price-text-field');
                const discountTextFieldInputValue = getRegularPriceTextFieldValue - ((30 * getRegularPriceTextFieldValue) / 100);
                setTextFieldValue('discount-text-price-field', discountTextFieldInputValue);

             }else{
                const regularPriceInputValue = parseFloat(regularPriceInputValueForDiscount);
                const discountInputValue = regularPriceInputValue - ((30 * regularPriceInputValue) / 100);
                setTextFieldValue('discount-text-price-field', discountInputValue);

             };

             const clearDiscountInputField = document.getElementById('discount-price-input');
             clearDiscountInputField.value = '';
    });

 });

