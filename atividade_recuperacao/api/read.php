<?php
// api/read.php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Para testes locais
header('Access-Control-Allow-Methods: GET');

require_once __DIR__ . '/../config/db.php';

try {
    $stmt = $pdo->prepare("SELECT * FROM tarefas ORDER BY created_at DESC");
    $stmt->execute();
    $tarefas = $stmt->fetchAll();
    
    echo json_encode([
        'success' => true,
        'data' => $tarefas
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Erro ao listar tarefas: ' . $e->getMessage()
    ]);
}
?>