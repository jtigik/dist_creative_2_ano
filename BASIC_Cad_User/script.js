document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem');

    // Validação simples no lado do cliente
    if (senha.length < 6) {
        mensagem.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        mensagem.style.color = 'red';
        return;
    }

    // Envio via AJAX
    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('email', email);
    formData.append('senha', senha);

    fetch('./cadastro.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        mensagem.textContent = data;
        if (data.includes('sucesso')) {
            mensagem.style.color = 'green';
            document.getElementById('formCadastro').reset(); // Limpa o formulário
        } else {
            mensagem.style.color = 'red';
        }
    })
    .catch(error => {
        mensagem.textContent = 'Erro ao enviar: ' + error;
        mensagem.style.color = 'red';
    });
});