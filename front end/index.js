"use strict";
const campoEmail = document.getElementById('campo_email');
const campoSenha = document.getElementById('campo_senha');
const mensagemErro = document.getElementById('mensagem-erro');
const formulario = document.querySelector('form');
formulario?.addEventListener('submit', async (event) => {

    event.preventDefault();
    const email = campoEmail?.value ?? '';
    const senha = campoSenha?.value ?? '';
    try {

        const resposta = await fetch(
            "http://localhost:8080/professores/login",
            {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    email: email,
                    senha: senha

                })

            }
        );

        const resultado = await resposta.text();

        if (resultado.includes("sucesso")) {

            window.location.href = "Aulas.html";

        } else {

            mensagemErro.textContent =
                "Email ou senha inválidos.";

        }

    } catch (erro) {

        console.error(erro);

    }
});