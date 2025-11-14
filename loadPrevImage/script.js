const input = document.getElementById('imagemInput');
const preview = document.getElementById('preview');

input.addEventListener('change', function(e) {
    const file = e.target.files[0];
    
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(event) {
            preview.src = event.target.result;
            preview.style.display = 'block'; // Mostra a imagem
        };
        
        reader.readAsDataURL(file); // Converte para base64
    } else {
        preview.src = '';
        preview.style.display = 'none';
    }
});