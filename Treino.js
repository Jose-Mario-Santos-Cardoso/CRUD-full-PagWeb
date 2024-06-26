function addExercicio() {
    const ID_Exercicio = document.getElementById('addID_Exercicio').value;
    const Nome_Exercicio = document.getElementById('addNome_Exercicio').value;
    const Grupamento_Muscular = document.getElementById('addGrupamento_Muscular').value;
    const Series = document.getElementById('addSeries').value;
    const Repeticoes = document.getElementById('addRepeticoes').value;
    const Tecnica = document.getElementById('addTecnica').value;
    const Descanco_Segundos = document.getElementById('addDescanco_Segundos').value;

    fetch('http://localhost:50090/addExercicio', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ID_Exercicio: ID_Exercicio, Nome_Exercicio: Nome_Exercicio, Grupamento_Muscular: Grupamento_Muscular,
            Series: Series, Repeticoes: Repeticoes, Tecnica: Tecnica, Descanco_Segundos: Descanco_Segundos })
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error('Error:', error));
}

function addTreino() {
    const ID_Treino = document.getElementById('addID_Treino').value;
    const Local_Treino = document.getElementById('addLocal_Treino').value;
    const Tempo_Treino = document.getElementById('addTempo_Treino').value;
    const Total_Series = document.getElementById('addTotal_Series').value;

    fetch('http://localhost:50090/addTreino', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ID_Treino: ID_Treino, Local_Treino: Local_Treino, Tempo_Treino: Tempo_Treino,
            Total_Series: Total_Series })
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error('Error:', error));
}