function getInputFieldValue(inputElement){
    const getInputField = document.getElementById(inputElement);
    const getInputFieldStringValue = getInputField.value;
    // const getInputFieldStringFixedValue = getInputFieldStringValue.toFixed(2);
    const getInputFieldNumericValue = parseFloat(getInputFieldStringValue);
    getInputField.value = '';
    return getInputFieldNumericValue;
};
function getTexedFieldValue(textElement){
    const getTextField = document.getElementById(textElement);
    const getTextFieldStringValue = getTextField.innerText;
    const getTextFieldNumericValue = parseFloat(getTextFieldStringValue);
    return getTextFieldNumericValue;
};

function setTextFieldValue(getElement, setElement){
    const getTextField = document.getElementById(getElement);
    getTextField.innerText = setElement;
};