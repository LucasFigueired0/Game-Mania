const botaoSubmit = document.querySelector('.botao-submit');
const email = document.querySelector('.entrada-email');
const senha = document.querySelector('.entrada-senha');

botaoSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    const valorEmail = email.value;
    const valorSenha = senha.value;

    if(valorEmail === '' || valorSenha === '')
    {
        return alert('Por favor, preencha todos os campos!');
    }
});



