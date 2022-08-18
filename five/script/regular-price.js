document.getElementById('submit-btn').addEventListener('click', function(){
    const regularPriceInputValue = getInputFieldValue('regular-price-input');
    setTextFieldValue('regular-price-text-field', regularPriceInputValue);
});