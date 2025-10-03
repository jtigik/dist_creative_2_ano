// server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Substitua pelo seu usuário MySQL
    password: '', // Substitua pela sua senha MySQL
    database: 'school_grades'
});
db.connect(err => {
    if (err) throw err;
    console.log('Conectado ao MySQL');
});
// CREATE
app.post('/grades', (req, res) => {
    const { student_name, subject, grade } = req.body;
    const sql = 'INSERT INTO grades (student_name, subject, grade) VALUES (?, ?, ?)';
    db.query(sql, [student_name, subject, grade], (err, result) => {
        if (err) throw err;
        res.send({ id: result.insertId });
    });
});
// READ
app.get('/grades', (req, res) => {
    const sql = 'SELECT * FROM grades';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});
// UPDATE - Versão corrigida
app.put('/grades/${id}', (req, res) => {
    const { student_name, subject, grade } = req.body;
    
    // Validação de entrada
    if (!student_name || !subject || !grade) {
        return res.status(400).json({ 
            error: 'student_name, subject e grade são obrigatórios' 
        });
    }
    
    // Validação da nota
    const gradeNum = parseFloat(grade);
    if (isNaN(gradeNum) || gradeNum < 0 || gradeNum > 10) {
        return res.status(400).json({ 
            error: 'A nota deve ser um número entre 0 e 10' 
        });
    }
    
    // Validação do ID
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ error: 'ID inválido' });
    }
    
    const sql = 'UPDATE grades SET student_name = ?, subject = ?, grade = ? WHERE id = ?';
    
    db.query(sql, [student_name, subject, gradeNum, id], (err, result) => {
        if (err) {
            console.error('Erro na consulta:', err);
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Registro não encontrado' });
        }
        
        res.status(200).json({ 
            message: 'Grade atualizada com sucesso',
            affectedRows: result.affectedRows 
        });
    });
});

// DELETE - Versão corrigida
app.delete('/grades/:id', (req, res) => {
    // Validação do ID
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ error: 'ID inválido' });
    }
    
    const sql = 'DELETE FROM grades WHERE id = ?';
    
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Erro na consulta:', err);
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Registro não encontrado' });
        }
        
        res.status(200).json({ 
            message: 'Grade excluída com sucesso',
            affectedRows: result.affectedRows 
        });
    });
});
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});