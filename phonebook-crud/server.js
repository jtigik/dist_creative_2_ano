    const express = require('express');
    const mysql = require('mysql2');
    // const cors = require('cors');
    const app = express();
    const port = 3000;
    
    // Middleware para parsear JSON e servir arquivos estáticos
    app.use(express.json());
    app.use(express.static('public'));
    // app.use(cors());
    
    // Conexão com o MySQL (ajuste user e password conforme sua configuração)
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',  // Seu usuário MySQL
        password: '',  // Sua senha MySQL (deixe vazio se não houver)
        database: 'phonebook'
    });
    
    // Conectar ao banco
    connection.connect((err) => {
        if (err) {
            console.error('Erro ao conectar ao MySQL:', err);
            return;
        }
        console.log('Conectado ao MySQL!');
    });
    
    // Rota para listar todos os contatos (READ)
    app.get('/contacts', (req, res) => {
        connection.query('SELECT * FROM contacts', (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results);
        });
    });
    
    // Rota para adicionar um contato (CREATE)
    app.post('/contacts', (req, res) => {
        const { name, phone } = req.body;
        if (!name || !phone) {
            return res.status(400).json({ error: 'Nome e telefone são obrigatórios' });
        }
        connection.query('INSERT INTO contacts (name, phone) VALUES (?, ?)', [name, phone], (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ id: result.insertId, name, phone });
        });
    });
    
    // Rota para atualizar um contato (UPDATE)
    app.put('/contacts/:id', (req, res) => {
        const { name, phone } = req.body;
        const id = req.params.id;
        if (!name || !phone) {
            return res.status(400).json({ error: 'Nome e telefone são obrigatórios' });
        }
        connection.query('UPDATE contacts SET name = ?, phone = ? WHERE id = ?', [name, phone, id], (err) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ message: 'Contato atualizado' });
        });
    });
    
    // Rota para deletar um contato (DELETE)
    app.delete('/contacts/:id', (req, res) => {
        const id = req.params.id;
        connection.query('DELETE FROM contacts WHERE id = ?', [id], (err) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ message: 'Contato deletado' });
        });
    });
    
    // Iniciar servidor
    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`);
    });