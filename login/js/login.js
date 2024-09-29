let btn = document.getElementById('btn');
let submitBtn = document.getElementById('submit');
let showpassword = document.getElementById('showpassword');
let show = document.getElementById('show');


let compteInfo = {};

function createCompte() {
    let inputFields = document.querySelectorAll('input');
    let connexion = document.getElementById('connexion');
    let isValid = true;

    inputFields.forEach(input => {
        if (input.value === '' || input.value === null) {
            isValid = false;
        }
    });

    if (!isValid) {
        alert('Veuillez remplir les champs!');

    } else {
        alert('Votre compte a bien été créé!');
        compteInfo.username = document.getElementById('inputName').value;
        compteInfo.email = document.getElementById('inputEmail').value;
        compteInfo.password = document.getElementById('inputPassword').value;

        inputFields.forEach(input => {
            input.value = '';
        });

        connexion.innerHTML= 'Connexion';
        btn.style.display = 'none';
        submitBtn.style.display = 'block';
    }

    }


function togglePassword() {
    let passwordInput = document.getElementById('inputPassword');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        show.innerHTML = 'Masquer';
    } else {
        passwordInput.type = 'password';
        show.innerHTML = 'Afficher mot de passe';
    }
}

function connecter() {
    let username = document.getElementById('inputName').value;
    let mail = document.getElementById('inputEmail').value;
    let password = document.getElementById('inputPassword').value;

    if (username === compteInfo.username && password === compteInfo.password && mail === compteInfo.email) {
        alert('Connexion réussie!');
    } else {
        alert('Errueur des indentifiants');
    }
}


btn.addEventListener('click', createCompte);

submitBtn.addEventListener('click', connecter);

showpassword.addEventListener('click', togglePassword);