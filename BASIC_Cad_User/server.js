const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Configurações do banco de dados
const dbConfig = {
    host: 'localhost',
    user: 'root', // Usuário padrão do MySQL (mude se necessário)
    password: '', // Senha (deixe vazio para desenvolvimento local)
    database: 'exemplo_db'
};

// Cria conexão com o banco de dados
const connection = mysql.createConnection(dbConfig);

// Verifica conexão
connection.connect((err) => {
    if (err) {
        console.error('Conexão falhou: ', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL!');
});

// Middleware para parsear dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rota para cadastro
app.post('/cadastro', (req, res) => {
    const { nome, email, senha } = req.body;

    // Prepara a query com prepared statements
    const query = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
    connection.execute(query, [nome, email, senha], (err, results) => {
        if (err) {
            console.error('Erro ao executar a query: ', err);
            res.status(500).send('Erro: ' + err.message);
            return;
        }
        res.send('Cadastro realizado com sucesso!');
    });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});