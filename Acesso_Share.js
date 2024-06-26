function addAcesso() {
    const ID_Acesso = document.getElementById('addID_Acesso').value;
    const Estado_Relacao = document.getElementById('addEstado_Relacao').value;

    fetch('http://localhost:50090/addAcesso', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ID_Acesso: ID_Acesso, Estado_Relacao: Estado_Relacao })
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error('Error:', error));
}