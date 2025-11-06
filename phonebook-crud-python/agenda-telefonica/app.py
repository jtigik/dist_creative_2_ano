from flask import Flask, render_template, request, redirect, url_for, flash
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)
app.secret_key = 'chave_secreta_simples'  # Para flash messages

# Configuração do MySQL
DB_CONFIG = {
    'host': 'localhost',
    'user': 'root',
    'password': '',  # Ajuste para sua senha
    'database': 'agenda_db'
}

def get_db_connection():
    try:
        connection = mysql.connector.connect(**DB_CONFIG)
        return connection
    except Error as e:
        print(f"Erro ao conectar ao banco: {e}")
        return None

@app.route('/', methods=['GET', 'POST'])
def index():
    connection = get_db_connection()
    if not connection:
        flash('Erro ao conectar ao banco de dados.')
        return render_template('index.html', contatos=[])

    cursor = connection.cursor()

    if request.method == 'POST':
        action = request.form.get('action')
        nome = request.form.get('nome')
        telefone = request.form.get('telefone')
        contact_id = request.form.get('id', 0, type=int)

        if action == 'adicionar' and nome and telefone:
            insert_query = "INSERT INTO contatos (nome, telefone) VALUES (%s, %s)"
            cursor.execute(insert_query, (nome, telefone))
            connection.commit()
            flash('Contato adicionado com sucesso!')

        elif action == 'editar' and contact_id > 0 and nome and telefone:
            update_query = "UPDATE contatos SET nome = %s, telefone = %s WHERE id = %s"
            cursor.execute(update_query, (nome, telefone, contact_id))
            connection.commit()
            flash('Contato atualizado com sucesso!')

        elif action == 'excluir' and contact_id > 0:
            delete_query = "DELETE FROM contatos WHERE id = %s"
            cursor.execute(delete_query, (contact_id,))
            connection.commit()
            flash('Contato excluído com sucesso!')

    # Listar todos os contatos
    cursor.execute("SELECT id, nome, telefone FROM contatos ORDER BY nome")
    contatos = cursor.fetchall()

    # Buscar contato para edição (se ID na URL)
    edit_id = request.args.get('edit', 0, type=int)
    contato_edit = None
    if edit_id:
        cursor.execute("SELECT id, nome, telefone FROM contatos WHERE id = %s", (edit_id,))
        contato_edit = cursor.fetchone()

    cursor.close()
    connection.close()
    return render_template('index.html', contatos=contatos, edit_contato=contato_edit)

if __name__ == '__main__':
    app.run(debug=True)