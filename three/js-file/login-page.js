 document.getElementById('login-submit-btn').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const emailFieldValue = emailField.value;
    emailField.value = '';
    
    const passwordField = document.getElementById('password-field');
    const passwordFieldValue = passwordField.value;
    passwordField.value = '';
    
    if(emailFieldValue == 'bank@gmail.com' && passwordFieldValue == 123456){
        console.log('login')
        window.location.href = 'inside-page.html'
    }else{
        alert("please enter valid email and password");
    };

 })