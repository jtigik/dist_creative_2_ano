<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List CRUD</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Sistema de Tarefas</h1>
    <form id="form-tarefa">
        <input type="text" id="titulo" placeholder="Título" required>
        <textarea id="descricao" placeholder="Descrição"></textarea>
        <button type="submit">Adicionar</button>
    </form>
    <ul id="lista-tarefas"></ul>
    <script src="assets/js/app.js"></script>
</body>
</html>