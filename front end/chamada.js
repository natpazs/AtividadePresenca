let cronograma = [];

const root = document.getElementById('chamada-root');

const params = new URLSearchParams(window.location.search);

const aulaId = Number(params.get('id'));

let currentDia = null;
let currentAula = null;

let attendanceStates = {};

async function carregarDados() {

    const resposta = await fetch("http://localhost:8080/aulas");

    cronograma = await resposta.json();

    currentDia = cronograma.find((dia) =>
        dia.aulas.some((aula) => aula.id === aulaId)
    );

    currentAula = currentDia.aulas.find(
        (aula) => aula.id === aulaId
    );

    currentAula.alunos.forEach((aluno) => {
        attendanceStates[aluno.id] = "none";
    });

    render();
}

function render() {

    root.innerHTML = `
    
    <div class="chamada-card">

        <div class="chamada-header">

            <div class="chamada-title">

            <span class="tag">Chamada</span>

            <h1>${currentAula.materia}</h1>

            <p>
                ${currentDia.nome} ·
                ${currentAula.horario}
            </p>

            <div class="chamada-actions">

                <button id="btn-presentes" class="btn-all-present">
                    Presença para todos
                </button>

                <button id="btn-faltas" class="btn-all-absent">
                    Falta para todos
                </button>

                <button id="btn-salvar" class="btn-save">
                    Salvar histórico
                </button>

            </div>

        </div>

            <a class="chamada-back" href="Aulas.html">
                ← Voltar para aulas
            </a>

        </div>

        <div class="attendance-list">

            ${currentAula.alunos.map((aluno) => {

                const state = attendanceStates[aluno.id];

                return `

                <div class="attendance-row">

                    <div class="student-name">
                        ${aluno.nome}
                    </div>

                    <div class="attendance-actions">

                        <button 
                            class="attendance-box present ${state === 'present' ? 'active' : ''}"
                            data-id="${aluno.id}"
                            data-state="present"
                        >
                            Presente
                        </button>

                        <button 
                            class="attendance-box absent ${state === 'absent' ? 'active' : ''}"
                            data-id="${aluno.id}"
                            data-state="absent"
                        >
                            Faltou
                        </button>

                    </div>

                </div>

                `;
            }).join('')}

        </div>

    </div>
    
    `;

    adicionarEventos();
}

function adicionarEventos() {

    const buttons = document.querySelectorAll('.attendance-box');

    buttons.forEach((button) => {
        const btnPresentes = document.getElementById('btn-presentes');

        const btnFaltas = document.getElementById('btn-faltas');

        const btnSalvar = document.getElementById('btn-salvar');

        btnPresentes.addEventListener('click', () => {

            currentAula.alunos.forEach((aluno) => {

                attendanceStates[aluno.id] = 'present';

            });

            render();

        });

        btnFaltas.addEventListener('click', () => {

            currentAula.alunos.forEach((aluno) => {

                attendanceStates[aluno.id] = 'absent';

            });

            render();

        });

        btnSalvar.addEventListener('click', async () => {

            const dados = {

                aulaId: aulaId,

                presencas: attendanceStates

            };

            try {

                const resposta = await fetch(
                    "http://localhost:8080/chamada/salvar",
                    {

                        method: "POST",

                        headers: {
                            "Content-Type": "application/json"
                        },

                        body: JSON.stringify(dados)

                    }
                );

                const resultado = await resposta.text();

                console.log(resultado);

                mostrarMensagem();

            } catch (erro) {

                console.error("Erro ao salvar:", erro);

            }

        });

        button.addEventListener('click', () => {

            const alunoId = Number(button.dataset.id);

            const estado = button.dataset.state;

            attendanceStates[alunoId] = estado;

            render();
        });

    });

}

function mostrarMensagem() {

    const mensagem = document.createElement("div");

    mensagem.innerText = "✓ Histórico salvo com sucesso!";

    mensagem.className = "mensagem-sucesso";

    document.body.appendChild(mensagem);

    setTimeout(() => {

        mensagem.remove();

    }, 3000);

}

carregarDados();