const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const contactId = document.getElementById('contactId');
const cancelEdit = document.getElementById('cancelEdit');
const contactList = document.getElementById('contactList');

// Função para listar contatos
async function loadContacts() {
    const response = await fetch('http://localhost:3000/contacts');
    const contacts = await response.json();
    contactList.innerHTML = '';
    contacts.forEach(contact => {
        const li = document.createElement('li');
        li.innerHTML = `${contact.name} - ${contact.phone}
            <button onclick="editContact(${contact.id}, '${contact.name}', '${contact.phone}')">Editar</button>
            <button class="delete" onclick="deleteContact(${contact.id})">Deletar</button>`;
        contactList.appendChild(li);
    });
}

// Função para adicionar ou atualizar contato
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = { name: nameInput.value, phone: phoneInput.value };
    let url = 'http://localhost:3000/contacts';
    let method = 'POST';
    
    if (contactId.value) {
        url = `http://localhost:3000/contacts/${contactId.value}`;
        method = 'PUT';
    }
    
    const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    
    if (response.ok) {
        resetForm();
        loadContacts();
    } else {
        alert('Erro ao salvar contato');
    }
});

// Função para editar contato
function editContact(id, name, phone) {
    contactId.value = id;
    nameInput.value = name;
    phoneInput.value = phone;
    cancelEdit.style.display = 'block';
}

// Função para cancelar edição
cancelEdit.addEventListener('click', resetForm);

// Função para resetar formulário
function resetForm() {
    contactId.value = '';
    nameInput.value = '';
    phoneInput.value = '';
    cancelEdit.style.display = 'none';
}

// Função para deletar contato
async function deleteContact(id) {
    if (confirm('Tem certeza que deseja deletar?')) {
        const response = await fetch(`http://localhost:3000/contacts/${id}`, { method: 'DELETE' });
        if (response.ok) {
            loadContacts();
        } else {
            alert('Erro ao deletar contato');
        }
    }
}

// Carregar contatos ao iniciar
loadContacts();