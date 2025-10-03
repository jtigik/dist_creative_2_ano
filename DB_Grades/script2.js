document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('gradeForm');
    const tableBody = document.querySelector('#gradesTable tbody');
    const cancelEditBtn = document.getElementById('cancelEdit');
    const gradeIdInput = document.getElementById('gradeId');
    const API_BASE_URL = process.env.API_URL || 'http://localhost:3000';

    // Função para carregar as notas
    async function loadGrades() {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000);
            const response = await fetch('http://localhost:3000/grades', { signal: controller.signal });
            clearTimeout(timeoutId);
            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status} ${response.statusText}`);
            }
            const grades = await response.json();
            tableBody.innerHTML = '';
            grades.forEach(grade => {
                const row = document.createElement('tr');
                // ... (manter o restante como está ou aplicar correção de XSS)
                tableBody.appendChild(row);
            });
        } catch (error) {
            if (error.name === 'AbortError') {
                console.error('Requisição excedeu o tempo limite');
                alert('Não foi possível conectar ao servidor. Verifique sua conexão.');
            } else {
                console.error('Erro ao carregar notas:', error);
                alert('Ocorreu um erro ao carregar as notas.');
            }
        }
    }

    // Função para salvar ou atualizar nota
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const id = gradeIdInput.value;
        const studentName = document.getElementById('studentName').value;
        const subject = document.getElementById('subject').value;
        const grade = document.getElementById('grade').value;

        // Validação de entrada
        if (!studentName || !subject || !grade) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        const gradeNum = parseFloat(grade);
        if (isNaN(gradeNum) || gradeNum < 0 || gradeNum > 10) {
            alert('A nota deve ser um número entre 0 e 10.');
            return;
        }

        const method = id ? 'PUT' : 'POST';
        const url = id ? `${API_BASE_URL}/grades/${id}` : `${API_BASE_URL}/grades`;

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000);
            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ student_name: studentName, subject, grade: gradeNum }),
                signal: controller.signal
            });
            clearTimeout(timeoutId);
            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status} ${response.statusText}`);
            }
            form.reset();
            gradeIdInput.value = '';
            cancelEditBtn.style.display = 'none';
            loadGrades();
            alert(method === 'PUT' ? 'Nota atualizada com sucesso!' : 'Nota adicionada com sucesso!');
        } catch (error) {
            if (error.name === 'AbortError') {
                console.error('Requisição excedeu o tempo limite');
                alert('Não foi possível conectar ao servidor. Verifique sua conexão.');
            } else {
                console.error('Erro ao salvar nota:', error);
                alert('Ocorreu um erro ao salvar a nota.');
            }
        }
    });

    // Função para excluir nota
    window.deleteGrade = async (id) => {
        if (confirm('Tem certeza que deseja excluir esta nota?')) {
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 5000);
                const response = await fetch(`${API_BASE_URL}/grades/${id}`, {
                    method: 'DELETE',
                    signal: controller.signal
                });
                clearTimeout(timeoutId);
                if (!response.ok) {
                    throw new Error(`Erro HTTP: ${response.status} ${response.statusText}`);
                }
                loadGrades();
                alert('Nota excluída com sucesso!');
            } catch (error) {
                if (error.name === 'AbortError') {
                    console.error('Requisição excedeu o tempo limite');
                    alert('Não foi possível conectar ao servidor. Verifique sua conexão.');
                } else {
                    console.error('Erro ao excluir nota:', error);
                    alert('Ocorreu um erro ao excluir a nota.');
                }
            }
        }
    };

    // ... (outras funções mantidas como estão)

    // Carregar notas iniciais
    loadGrades();
});