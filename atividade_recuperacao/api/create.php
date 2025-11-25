<?php
// api/create.php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método não permitido']);
    exit;
}

require_once __DIR__ . '/../config/db.php';

$input = json_decode(file_get_contents('php://input'), true);

if (!isset($input['titulo']) || empty(trim($input['titulo']))) {
    http_response_code(400);
    echo json_encode(['error' => 'Título é obrigatório']);
    exit;
}

try {
    $stmt = $pdo->prepare("INSERT INTO tarefas (titulo, descricao) VALUES (:titulo, :descricao)");
    $stmt->execute([
        'titulo' => trim($input['titulo']),
        'descricao' => $input['descricao'] ?? ''
    ]);
    
    $id = $pdo->lastInsertId();
    echo json_encode([
        'success' => true,
        'data' => ['id' => $id, 'titulo' => $input['titulo'], 'descricao' => $input['descricao'] ?? '']
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Erro ao criar tarefa: ' . $e->getMessage()]);
}
?>