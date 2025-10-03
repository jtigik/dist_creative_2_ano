<?php
// Configurações do banco de dados
$servername = "localhost";
$username = "root"; // Usuário padrão do MySQL (mude se necessário)
$password = ""; // Senha (deixe vazio para desenvolvimento local)
$dbname = "exemplo_db";

// Cria conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Recebe dados do formulário
$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = $_POST['senha']; // Em produção, use password_hash($senha, PASSWORD_DEFAULT);

// Prepara e executa a query (usando prepared statements para segurança)
$stmt = $conn->prepare("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $nome, $email, $senha);

if ($stmt->execute()) {
    echo "Cadastro realizado com sucesso!";
} else {
    echo "Erro: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>