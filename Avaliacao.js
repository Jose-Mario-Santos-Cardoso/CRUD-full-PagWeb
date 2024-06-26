function addAvaliacao() {
    const ID_Avaliacao = document.getElementById('addID_Avaliacao').value;
    const Nome_Avaliacao = document.getElementById('addNome_Avaliacao').value;
    const Objetivo_Avaliacao = document.getElementById('addObjetivo_Avaliacao').value;

    fetch('http://localhost:50090/addAvaliacao', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ID_Avaliacao: ID_Avaliacao, Nome_Avaliacao: Nome_Avaliacao, Objetivo_Avaliacao: Objetivo_Avaliacao })
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error('Error:', error));
}