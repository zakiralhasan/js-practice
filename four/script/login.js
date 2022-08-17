document.getElementById('login-submit-btn').addEventListener('click', function(){
    const emailInputField = document.getElementById('email-field');
    const emailInputFieldValue = emailInputField.value;
    emailInputField.value = '';

    const passwordInputField = document.getElementById('password-field');
    const passwordInputFieldValue =passwordInputField.value;
    passwordInputField.value = '';

    if(emailInputFieldValue == 'bank@mail.com' && passwordInputFieldValue == 1234){
        window.location.href = 'inside-page.html';
    }else{
        alert('Please enter a valid email and password')
    };
});