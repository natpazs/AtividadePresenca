"use strict";
const campoEmail = document.getElementById('campo_email');
const campoSenha = document.getElementById('campo_senha');
const mensagemErro = document.getElementById('mensagem-erro');
const formulario = document.querySelector('form');
formulario?.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = campoEmail?.value ?? '';
    const senha = campoSenha?.value ?? '';
    if (email === 'prof@gmail.com' && senha === '1234') {
        window.location.href = 'Aulas.html';
        return;
    }
    if (mensagemErro) {
        mensagemErro.textContent = 'E-mail ou senha incorretos. Tente novamente.';
    }
});