const profileInput = document.getElementById('profileInput');
const profileImage = document.getElementById('profileImage');

profileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profileImage.src = e.target.result;
            // Enviar imagem para o servidor
            saveImageToDatabase(e.target.result);
        };
        reader.readAsDataURL(file);
    }
});

async function saveImageToDatabase(imageData) {
    try {
        const response = await fetch('http://localhost:3000/save-profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ image: imageData })
        });
        const data = await response.json();
        if (data.success) {
            alert('Imagem salva com sucesso!');
        } else {
            alert('Erro ao salvar a imagem: ' + data.error);
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao conectar com o servidor.');
    }
}