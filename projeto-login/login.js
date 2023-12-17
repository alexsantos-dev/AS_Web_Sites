function login() {
    let userMail = document.getElementById('uEmail').value.trim();
    let userPass = document.getElementById('uSenha').value.trim();
    if (userMail === 'user@gmail.com' && userPass === 'Abc-123') {
        window.alert('Pass');
    }
    else {
        window.alert('Wrong Pass! Please try again.');
    }

}