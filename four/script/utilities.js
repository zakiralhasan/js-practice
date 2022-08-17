// function for getting value from the input field and also returning the value.
function getInputFieldValue(inputElement){
    const getInputField = document.getElementById(inputElement);
    const getInputFieldStringValue = getInputField.value;
    const getInputFieldNumericValue = parseFloat(getInputFieldStringValue);
    getInputField.value = '';
    return getInputFieldNumericValue;
};
// function for getting value from the text field and also returning the value.
function getTextFieldValue(textElement){
    const getTextField = document.getElementById(textElement);
    const getTextFieldStringValue = getTextField.innerText;
    const getTextFieldNumericValue = parseFloat(getTextFieldStringValue);
    return getTextFieldNumericValue;
};
// function for setting the value to a text field
function setTextFieldValue(textElement, newValue){
    const getTextFieldToSetNewValue = document.getElementById(textElement);
    getTextFieldToSetNewValue.innerText = newValue;
};