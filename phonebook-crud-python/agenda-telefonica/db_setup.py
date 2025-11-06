
import mysql.connector
from mysql.connector import Error

# Configuração do MySQL (sem 'database' inicial para criar o banco)
config = {
    'host': 'localhost',
    'user': 'root',
    'password': '',  # Mude para sua senha
    # 'database' removido aqui para conexão inicial
}

try:
    # Conectar sem banco específico
    connection = mysql.connector.connect(**config)
    if connection.is_connected():
        cursor = connection.cursor()
        
        # Criar banco se não existir
        cursor.execute("CREATE DATABASE IF NOT EXISTS agenda_db")
        print("Banco 'agenda_db' criado ou já existe.")
        
        # Usar o banco recém-criado
        cursor.execute("USE agenda_db")
        
        # Criar tabela contatos
        create_table_query = """
        CREATE TABLE IF NOT EXISTS contatos (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(100) NOT NULL,
            telefone VARCHAR(20) NOT NULL
        )
        """
        cursor.execute(create_table_query)
        connection.commit()
        print("Tabela 'contatos' criada com sucesso!")
        
        cursor.close()
        connection.close()
        print("Configuração do banco concluída!")

except Error as e:
    print(f"Erro ao conectar ao MySQL: {e}")

finally:
    # O finally só executa se connection foi criada (mesmo que falhe depois)
    if 'connection' in locals() and connection.is_connected():
        cursor.close()
        connection.close()