async function listarTarefas() {
    try {
        const response = await fetch('api/read.php');
        const result = await response.json();
        if (result.success) {
            // Renderiza no DOM com createElement e appendChild
            const lista = document.getElementById('lista-tarefas');
            lista.innerHTML = ''; // Limpa
            result.data.forEach(tarefa => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <input type="checkbox" ${tarefa.concluida ? 'checked' : ''} onchange="atualizarStatus(${tarefa.id}, this.checked)">
                    <span>${tarefa.titulo} - ${tarefa.descricao}</span>
                    <button onclick="editarTarefa(${tarefa.id})">Editar</button>
                    <button onclick="excluirTarefa(${tarefa.id})">Excluir</button>
                `;
                lista.appendChild(li);
            });
        }
    } catch (error) {
        console.error('Erro:', error);
    }
}
listarTarefas(); // Chama ao carregar página

async function adicionarTarefa(titulo, descricao) {
    try {
        const response = await fetch('api/create.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ titulo, descricao })
        });
        const result = await response.json();
        if (result.success) {
            listarTarefas(); // Recarrega lista
            // Limpa formulário
        }
    } catch (error) {
        console.error('Erro:', error);
    }
}

async function atualizarStatus(id, concluida) {
    await fetch('api/update.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, concluida })
    });
    // Opcional: recarregar lista
}

async function excluirTarefa(id) {
    if (confirm('Excluir esta tarefa?')) {
        await fetch('api/delete.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
        });
        listarTarefas(); // Recarrega
    }
}