const express = require('express');
const mysql = require('mssql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());


const pool = mysql.createPool( {
    host: 'localhost',
    user: 'root',
    database: 'CRUD',
    password: '',
    port: 3306
});

app.get('/', (req,res) => {
    res.send ("API Personal em execução!  Endpoints: /addAcesso, /addAgenda, /addAvaliacao, /readAcesso, /readAgenda, /readAvaliacao");
});

app.post('/addAcesso', function(req, res) => {
    const { ID_Acesso, Estado_Relacao } = req.body;

    pool.query(
        'INSERT INTO Acesso (ID_Acesso, Estado_Relacao) VALUES (?, ?)',
        [ID_Acesso, Estado_Relacao],
        (err, results) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).send('Acesso adicionado com sucesso!');
        }
    );
});


app.get('/readAcesso', (req, res) => {
    

    const { ID_Acesso } = req.query;  
    
    pool.query(
        'SELECT * FROM Acesso WHERE ID_Acesso = ?',
        [ID_Acesso],
        (err, results) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (results.length > 0) {
                res.status(200).json(results);
            } else {
                res.status(404).send('Acesso não encontrado');
            }
        }
    );
});


app.post('/api/cadastro', function(req, res) {
    let data = req.body;

    sql.connect(config, function(err) {
        if (err) console.log(err);

        let request = new sql.Request();
        
        let query = `INSERT INTO Personal (Nome, Email, CPF_Personal, Contato, Sexo, Estado, Cidade, Idade, Senha) VALUES ('${data.nome}', '${data.email}', ${data.cpf}, ${data.contato}, '${data.sexo}', '${data.estado}', '${data.cidade}', ${data.idade}, '${data.senha}')`;
        request.query(query, function(err, result) {
            if (err) {
                console.log(err);
                res.status(500).send('Erro no servidor');
            } else {
                res.status(200).send('Cadastro realizado com sucesso');
            }
        });
    });
});


sql.connect(config).then(() => {
    console.log('Conexão com SQL Server estabelecida');
}).catch(err => {
    console.error('Erro ao conectar com SQL Server:', err);
});

app.post('/crud', (req, res) => {
    const { nome, email, cpf_personal, contato, sexo, estado, cidade, idade, senha } = req.body;

    new sql.Request().query(`
        INSERT INTO Personal (Nome, Email, CPF_Personal, Contato, Sexo, Estado, Cidade, Idade, Senha)
        VALUES ('${nome}', '${email}', ${cpf_personal}, ${contato}, '${sexo}', '${estado}', '${cidade}', ${idade}, '${senha}')
    `).then(result => {
        res.json({ message: 'Inserido com sucesso' });
    }).catch(err => {
        console.error('Erro ao inserir:', err);
        res.status(500).json({ message: 'Erro ao inserir' });
    });
});

// READ
app.get('/crud/:cpf_personal', (req, res) => {
    const cpf_personal = req.params.cpf_personal;

    new sql.Request().query(`
        SELECT * FROM Personal WHERE CPF_Personal = ${cpf_personal}
    `).then(result => {
        res.json(result.recordset);
    }).catch(err => {
        console.error('Erro ao ler:', err);
        res.status(500).json({ message: 'Erro ao ler' });
    });
});

// UPDATE
app.put('/crud/:cpf_personal', (req, res) => {
    const cpf_personal = req.params.cpf_personal;
    const { nome, email, contato, sexo, estado, cidade, idade, senha } = req.body;

    new sql.Request().query(`
        UPDATE Personal
        SET Nome = '${nome}', Email = '${email}', Contato = ${contato}, Sexo = '${sexo}', Estado = '${estado}', Cidade = '${cidade}', Idade = ${idade}, Senha = '${senha}'
        WHERE CPF_Personal = ${cpf_personal}
    `).then(result => {
        res.json({ message: 'Atualizado com sucesso' });
    }).catch(err => {
        console.error('Erro ao atualizar:', err);
        res.status(500).json({ message: 'Erro ao atualizar' });
    });
});

// DELETE
app.delete('/crud/:cpf_personal', (req, res) => {
    const cpf_personal = req.params.cpf_personal;

    new sql.Request().query(`
        DELETE FROM Personal WHERE CPF_Personal = ${cpf_personal}
    `).then(result => {
        res.json({ message: 'Deletado com sucesso' });
    }).catch(err => {
        console.error('Erro ao deletar:', err);
        res.status(500).json({ message: 'Erro ao deletar' });
    });
});


app.post('/api/agenda', function(req, res) {
    let data = req.body;
    //Connect-to-BD +/e insert-Dados-d'agend->table}"Agenda"
    // ...
});


const port = 3000;
app.listen(port, function() {
    console.log(`Servidor rodando na porta ${port}`);
});