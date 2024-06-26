function addPersonal() {
    const Email = document.getElementById('addEmail').value;
    const Nome = document.getElementById('addNome').value;
    const CPF = document.getElementById('addCPF').value;
    const Contato = document.getElementById('addContato').value;
    const Sexo = document.getElementById('addSexo').value;
    const Estado = document.getElementById('addEstado').value;
    const Cidade = document.getElementById('addCidade').value;
    const Idade = document.getElementById('addIdade').value;
    const Senha = document.getElementById('addSenha').value;

    fetch('http://localhost:50090/addPersonal', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Email: Email, Nome: Nome, CPF_Personal: CPF,
            Contato: Contato, Sexo: Sexo, Estado: Estado, Cidade: Cidade,
            Idade: Idade, Senha: Senha })
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error('Error:', error));
}