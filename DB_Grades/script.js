document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('gradeForm');
    const tableBody = document.querySelector('#gradesTable tbody');
    const cancelEditBtn = document.getElementById('cancelEdit');
    const gradeIdInput = document.getElementById('gradeId');
    // Função para carregar as notas
    async function loadGrades() {
        try {
            const response = await fetch('http://localhost:3000/grades');
            const grades = await response.json();
            tableBody.innerHTML = '';
            grades.forEach(grade => {
                const row = document.createElement('tr');
                row.innerHTML =`
                    <td>${grade.id}</td>
                    <td>${grade.student_name}</td>
                    <td>${grade.subject}</td>
                    <td>${grade.grade}</td>
                    <td>
                    <button class="edit-btn"
                    onclick="editGrade(${grade.id}, '${grade.student_name}', '${grade.subject}',
                    ${grade.grade})">Editar</button>
                    <button class="delete-btn"
                    onclick="deleteGrade(${grade.id})">Excluir</button>
                    </td>
                `;
            tableBody.appendChild(row);
            });
        } catch (error) {
            console.error('Erro ao carregar notas:', error);
        }
    }
    // Função para editar nota
    window.editGrade = (id, studentName, subject, grade) => {
        gradeIdInput.value = id;
        document.getElementById('studentName').value = studentName;
        document.getElementById('subject').value = subject;
        document.getElementById('grade').value = grade;
        cancelEditBtn.style.display = 'block';
    };
    // Função para salvar ou atualizar nota
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const id = gradeIdInput.value;
        const studentName = document.getElementById('studentName').value;
        const subject = document.getElementById('subject').value;
        const grade = document.getElementById('grade').value;
        const method = id ? 'PUT' : 'POST';
        const url = id ? `http://localhost:3000/grades/${id}` : `http://localhost:3000/grades`;
        try {
            await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ student_name: studentName, subject, grade })
            });
            form.reset();
            gradeIdInput.value = '';
            cancelEditBtn.style.display = 'none';
            loadGrades();
        } catch (error) {
            console.error('Erro ao salvar nota:', error);
        }
    });
// Função para cancelar edição
cancelEditBtn.addEventListener('click', () => {
    form.reset();
    gradeIdInput.value = '';
    cancelEditBtn.style.display = 'none';
});

// Função para excluir nota
window.deleteGrade = async (id) => {
    if (confirm('Tem certeza que deseja excluir esta nota?')) {
        try {
            await fetch(`http://localhost:3000/grades/${id}`, { method:'DELETE' });
            loadGrades();
        } catch (error) {
            console.error('Erro ao excluir nota:', error);
        }
    }
};
    // Carregar notas iniciais
    loadGrades();
    });