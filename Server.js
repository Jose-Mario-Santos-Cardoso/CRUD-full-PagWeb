const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
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
    res.send ("API Personal em execução!  Endpoints: /addPersonal, /readPersonal, /delPersonal, /listPersonal");
});


app.post('/addPersonal', (req, res) => {
    const { Email, Nome, CPF_Personal, Contato, Sexo, Estado, Cidade, Idade, Senha } = req.body;

    pool.query(
        'INSERT INTO Personal (Email, Nome, CPF_Personal, Contato, Sexo, Estado, Cidade, Idade, Senha) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [Email, Nome, CPF_Personal, Contato, Sexo, Estado, Cidade, Idade, Senha],
        (err, results) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).send('Personal adicionado com sucesso!');
        }
    );
});


app.get('/readPersonal', (req, res) => {
    

    const { CPF_Personal } = req.query;  
    
    pool.query(
        'SELECT * FROM Personal WHERE CPF_Personal = ?',
        [CPF_Personal],
        (err, results) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (results.length > 0) {
                res.status(200).json(results);
            } else {
                res.status(404).send('Personal não encontrado');
            }
        }
    );
});


app.delete('/delPersonal', (req, res) => {
    const { CPF_Personal } = req.query;

    pool.query(
        'DELETE FROM Personal WHERE CPF_Personal = ?',
        [CPF_Personal],
        (err, results) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (results.affectedRows > 0) {
                res.status(200).send('Personal deletado com sucesso!');
            } else {
                res.status(404).send('Personal não encontrado');
            }
        }
    );
});


// UPDATE
app.put('/UpdatePersonal', (req, res) => {
    const CPF_Personal = req.params.CPF_Personal;
    const { Email, Nome, Contato, Sexo, Estado, Cidade, Idade, Senha } = req.body;

    new sql.Request().query(`
        UPDATE Personal
        SET Nome = '${Nome}', Email = '${Email}', Contato = ${Contato}, Sexo = '${Sexo}', Estado = '${Estado}', Cidade = '${Cidade}', Idade = ${Idade}, Senha = '${Senha}'
        WHERE CPF_Personal = ${CPF_Personal}
    `).then(result => {
        res.json({ message: 'Atualizado com sucesso' });
    }).catch(err => {
        console.error('Erro ao atualizar:', err);
        res.status(500).json({ message: 'Erro ao atualizar' });
    });
});


app.listen(50090, () => {
    console.log('Servidor rodando na porta 50090');
});