const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const app = express();
const port = 3000;

// Configuração do middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Configuração da conexão com o MySQL
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
};

// Endpoint para salvar a imagem
app.post('/save-profile', async (req, res) => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const { image } = req.body;

        // Inserir ou atualizar a imagem no banco
        const [result] = await connection.execute(
            'INSERT INTO profile_images (image_data) VALUES (?) ON DUPLICATE KEY UPDATE image_data = ?',
            [image, image]
        );

        await connection.end();
        res.json({ success: true });
    } catch (error) {
        console.error('Erro:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});