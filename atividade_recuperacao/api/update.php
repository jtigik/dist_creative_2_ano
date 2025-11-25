<?php
// api/update.php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT, POST'); // Aceita PUT ou POST
header('Access-Control-Allow-Headers: Content-Type');

if (!in_array($_SERVER['REQUEST_METHOD'], ['PUT', 'POST'])) {
    http_response_code(405);
    echo json_encode(['error' => 'Método não permitido']);
    exit;
}

require_once __DIR__ . '/../config/db.php';

$input = json_decode(file_get_contents('php://input'), true);

if (!isset($input['id']) || !is_numeric($input['id'])) {
    http_response_code(400);
    echo json_encode(['error' => 'ID é obrigatório']);
    exit;
}

try {
    // Atualização parcial: só campos presentes
    $sql = "UPDATE tarefas SET ";
    $params = [];
    
    if (isset($input['titulo'])) {
        $sql .= "titulo = :titulo, ";
        $params['titulo'] = trim($input['titulo']);
    }
    if (isset($input['descricao'])) {
        $sql .= "descricao = :descricao, ";
        $params['descricao'] = $input['descricao'];
    }
    if (isset($input['concluida'])) {
        $sql .= "concluida = :concluida, ";
        $params['concluida'] = (bool) $input['concluida'];
    }
    
    $sql = rtrim($sql, ', ') . " WHERE id = :id";
    $params['id'] = $input['id'];
    
    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    
    if ($stmt->rowCount() === 0) {
        http_response_code(404);
        echo json_encode(['error' => 'Tarefa não encontrada']);
        exit;
    }
    
    echo json_encode(['success' => true, 'message' => 'Tarefa atualizada']);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Erro ao atualizar: ' . $e->getMessage()]);
}
?>