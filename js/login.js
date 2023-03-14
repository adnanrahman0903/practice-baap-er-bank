document.getElementById('btn-login').addEventListener('click', function () {
    const emailId = document.getElementById('email-id');
    const emailValue = emailId.value;
    const passwordId = document.getElementById('password-id');
    const passwordValue = passwordId.value;
    if (emailValue === 'baba@shontan.com' && passwordValue === 'secret') {
        window.location.href = 'bank.html'
    }
    else {
        alert('Invalid Email or Password')
    }
})