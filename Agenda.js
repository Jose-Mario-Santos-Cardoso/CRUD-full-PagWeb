function addAgenda() {
    const ID_Agenda = document.getElementById('addID_Agenda').value;
    const Data_Conclusao = document.getElementById('addData_Conclusao').value;
    const Data_Realizacao = document.getElementById('addData_Realizacao').value;
    const Horario_Encontro = document.getElementById('addHorario_Encontro').value;

    fetch('http://localhost:50090/addAgenda', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ID_Agenda: ID_Agenda, Data_Conclusao: Data_Conclusao, Data_Realizacao: Data_Realizacao,
            Horario_Encontro: Horario_Encontro })
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error('Error:', error));
}