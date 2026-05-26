let cronograma = [];
let index = 0;

const container = document.getElementById('container-semana');
const btnPrev = document.getElementById('prevDay');
const btnNext = document.getElementById('nextDay');

async function carregarAulas() {

    const resposta = await fetch("http://localhost:8080/aulas");

    cronograma = await resposta.json();

    mostrarDia();
}

function mostrarDia() {

    const dia = cronograma[index];

    container.innerHTML = `
        <div class="day-card">
            <h3>${dia.nome}</h3>

            <div class="lista-aulas">

                ${dia.aulas.map((aula) => `

                    <button class="aula-item" onclick="window.location.href='Chamada.html?id=${aula.id}'">

                        <div class="aula-info">
                            <span class="aula-time">${aula.horario}</span>
                            <div class="aula-title">${aula.materia}</div>
                        </div>

                    </button>

                `).join('')}

            </div>
        </div>
    `;

    btnPrev.disabled = index === 0;
    btnNext.disabled = index === cronograma.length - 1;
}

btnPrev.addEventListener('click', () => {

    if(index > 0){
        index--;
        mostrarDia();
    }

});

btnNext.addEventListener('click', () => {

    if(index < cronograma.length - 1){
        index++;
        mostrarDia();
    }

});

carregarAulas();