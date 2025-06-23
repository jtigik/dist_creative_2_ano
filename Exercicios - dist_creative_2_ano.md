## Exercícios para UI/UX com Figma e Banco de Dados MySQL

Os exercícios a seguir são voltados para os alunos do 2º ano do Ensino Médio, alinhados ao currículo de **UI/UX com Figma e Banco de Dados MySQL**. Eles reforçam os conceitos dos módulos (UI/UX com Figma e Banco de Dados MySQL), incentivando a prática em design de interfaces e gerenciamento de dados relacionais. As tarefas incluem prototipagem, modelagem de bancos de dados e integração de interfaces com dados, com foco em usabilidade e funcionalidade.

---

### Módulo 1: UI/UX com Figma (55 horas)

#### Exercício 1: Exploração do Figma (Semana 1)
**Objetivo**: Dominar a interface do Figma e princípios de UI/UX.  
**Tarefa**:  
- Crie um projeto no Figma e desenhe um banner para um site fictício de eventos culturais.  
- Use:  
  - Uma paleta de cores com 3 tons (primária, secundária, neutra).  
  - Tipografia consistente (ex.: Google Fonts).  
  - Imagens ou ícones para complementar o design.  
- Anote no Figma as escolhas de design (ex.: "Cor primária: #2E86C1 para destacar botões").  
**Entrega Esperada**:  
- Arquivo Figma com o banner.  
- Anotações das escolhas de design.  
**Dica**: Explore o recurso de "Styles" no Figma para definir cores e fontes.

#### Exercício 2: Pesquisa de Usuário (Semana 2)
**Objetivo**: Criar personas e jornadas do usuário.  
**Tarefa**:  
- Desenvolva uma persona para um sistema de gerenciamento de bibliotecas.  
- Inclua: nome, idade, ocupação, objetivos (ex.: encontrar livros rapidamente), desafios (ex.: dificuldade com sistemas complexos).  
- No Figma, crie um slide para a persona e outro para a jornada do usuário (ex.: etapas desde a busca até o empréstimo de um livro).  
- Apresente os slides para a turma.  
**Entrega Esperada**:  
- Arquivo Figma com persona e jornada.  
- Apresentação (3 minutos).  
**Dica**: Use quadros (frames) no Figma para organizar os slides.

#### Exercício 3: Wireframes de Alta Fidelidade (Semana 3)
**Objetivo**: Criar wireframes detalhados.  
**Tarefa**:  
- Desenhe um wireframe de alta fidelidade para o dashboard de um sistema de e-commerce (ex.: painel do vendedor).  
- Inclua:  
  - Área de estatísticas (ex.: vendas totais).  
  - Lista de pedidos recentes.  
  - Menu lateral de navegação.  
- Use componentes reutilizáveis para botões e cards de pedidos.  
**Entrega Esperada**:  
- Arquivo Figma com o wireframe.  
**Dica**: Crie uma biblioteca de componentes no Figma para agilizar o design.

#### Exercício 4: Prototipagem Avançada (Semana 4)
**Objetivo**: Desenvolver protótipos com interações complexas.  
**Tarefa**:  
- Baseado no wireframe do Exercício 3, crie um protótipo interativo no Figma.  
- Adicione interações:  
  - Clicar no menu lateral abre uma subseção (ex.: "Pedidos").  
  - Clicar em um card de pedido abre uma tela de detalhes.  
  - Adicione um modal (pop-up) para confirmar uma ação (ex.: cancelar pedido).  
- Grave um vídeo (1 minuto) mostrando o fluxo interativo.  
**Entrega Esperada**:  
- Arquivo Figma com o protótipo.  
- Vídeo demonstrativo.  
**Dica**: Use "Overlay" no Figma para criar modais.

#### Exercício 5: Sistema de Design (Semana 5)
**Objetivo**: Criar um sistema de design consistente.  
**Tarefa**:  
- Crie um sistema de design no Figma para o dashboard do Exercício 3.  
- Defina:  
  - Paleta de cores (com primária, secundária, erro, etc.).  
  - Estilos de texto (ex.: títulos, parágrafos, botões).  
  - Componentes reutilizáveis (ex.: botões, inputs de formulário).  
- Aplique o sistema ao protótipo, garantindo consistência visual.  
**Entrega Esperada**:  
- Arquivo Figma com o sistema de design e protótipo atualizado.  
**Dica**: Use "Styles" e "Components" para organizar o sistema.

#### Exercício 6: Projeto Prático de UI/UX (Semanas 6-7)
**Objetivo**: Desenvolver um protótipo completo e funcional.  
**Tarefa**:  
- Crie um protótipo para um sistema fictício (ex.: app de reserva de consultas médicas).  
- Inclua pelo menos 4 telas: tela inicial, busca de médicos, detalhes da consulta e confirmação.  
- Realize testes de usabilidade com 2 colegas e documente os feedbacks.  
- Aplique melhorias com base nos testes e apresente o protótipo final à turma.  
**Entrega Esperada**:  
- Arquivo Figma com o protótipo.  
- Relatório com feedbacks e melhorias.  
- Apresentação (5-7 minutos).  
**Dica**: Use grids e guias no Figma para layouts precisos.

---

### Módulo 2: Banco de Dados MySQL (55 horas)

#### Exercício 7: Modelagem de Dados (Semana 8)
**Objetivo**: Criar um modelo de dados relacional.  
**Tarefa**:  
- Modele um banco de dados para uma loja online no MySQL Workbench.  
- Crie um diagrama ER com entidades:  
  - `Clientes` (id, nome, email).  
  - `Produtos` (id, nome, preço).  
  - `Pedidos` (id, id_cliente, data).  
- Defina chaves primárias e relacionamentos (ex.: um cliente faz muitos pedidos).  
**Entrega Esperada**:  
- Diagrama ER exportado como PNG ou PDF.  
**Dica**: Use o MySQL Workbench para criar o diagrama e exportar.

#### Exercício 8: Criação de Tabelas (Semana 8)
**Objetivo**: Implementar tabelas com DDL.  
**Tarefa**:  
- Baseado no diagrama do Exercício 7, escreva comandos SQL para criar as tabelas `Clientes`, `Produtos`, e `Pedidos`.  
- Inclua:  
  - Chaves primárias e estrangeiras.  
  - Restrições (ex.: `NOT NULL` para nome).  
- Execute os comandos no MySQL Workbench e insira 3 registros de teste em cada tabela.  
**Entrega Esperada**:  
- Arquivo `.sql` com os comandos.  
- Captura de tela das tabelas com dados.  
**Dica**: Use `CREATE TABLE` e `INSERT INTO` para as operações.

#### Exercício 9: Consultas Básicas (Semana 9)
**Objetivo**: Praticar consultas SQL com SELECT.  
**Tarefa**:  
- Usando o banco do Exercício 8, escreva consultas SQL para:  
  - Listar todos os clientes (nome e email).  
  - Encontrar produtos com preço acima de R$100.  
  - Listar pedidos ordenados por data (mais recente primeiro).  
- Execute as consultas e exporte os resultados.  
**Entrega Esperada**:  
- Arquivo `.sql` com as consultas.  
- Capturas de tela dos resultados.  
**Dica**: Use `SELECT`, `WHERE`, e `ORDER BY` corretamente.

#### Exercício 10: Consultas com JOIN (Semana 10)
**Objetivo**: Aplicar joins para consultas relacionais.  
**Tarefa**:  
- Escreva consultas SQL para:  
  - Listar todos os pedidos com o nome do cliente associado (usando `INNER JOIN`).  
  - Listar clientes que não fizeram pedidos (usando `LEFT JOIN`).  
- Adicione uma tabela `Itens_Pedido` (id, id_pedido, id_produto, quantidade) e insira dados de teste.  
- Crie uma consulta para calcular o total de cada pedido (quantidade * preço do produto).  
**Entrega Esperada**:  
- Arquivo `.sql` com as consultas e criação da nova tabela.  
- Capturas de tela dos resultados.  
**Dica**: Teste os joins com poucos dados para evitar erros.

#### Exercício 11: Projeto Prático de MySQL (Semanas 12-13)
**Objetivo**: Desenvolver um banco de dados funcional.  
**Tarefa**:  
- Crie um banco de dados para um sistema de gerenciamento de eventos (ex.: shows, palestras).  
- Inclua tabelas:  
  - `Eventos` (id, nome, data, local).  
  - `Participantes` (id, nome, email).  
  - `Inscrições` (id, id_evento, id_participante).  
- Escreva comandos SQL para:  
  - Criar tabelas com relacionamentos.  
  - Inserir 5 eventos e 10 participantes.  
  - Consultas: listar inscrições por evento, contar participantes por evento.  
- Teste o banco e valide os dados.  
**Entrega Esperada**:  
- Arquivo `.sql` com todos os comandos.  
- Capturas de tela das consultas executadas.  
- Relatório curto com descrição do sistema.  
**Dica**: Use chaves estrangeiras e índices para otimizar consultas.

#### Exercício 12: Integração UI/UX e MySQL (Semanas 14-15)
**Objetivo**: Integrar interface com banco de dados.  
**Tarefa**:  
- Escolha o protótipo do Exercício 6 (ex.: app de consultas médicas).  
- Crie um banco de dados correspondente (ex.: tabelas para médicos, pacientes, consultas).  
- Desenvolva:  
  - Consultas SQL para listar médicos e agendar consultas.  
  - Uma simulação no Figma mostrando como os dados (ex.: lista de médicos) seriam exibidos na interface.  
- Apresente o projeto, explicando a integração entre o protótipo e o banco.  
**Entrega Esperada**:  
- Arquivo Figma com a simulação.  
- Arquivo `.sql` com o banco de dados.  
- Apresentação (7-10 minutos).  
**Dica**: Use mockups de dados no Figma para simular a integração.

---

## Diretrizes para Implementação

- **Ambiente**: Use Figma para design e MySQL Workbench para bancos de dados. VS Code pode ser usado para anotações ou testes.  
- **Entrega**: Envie arquivos Figma, `.sql`, capturas de tela e relatórios via plataforma da escola.  
- **Progressão**: Exercícios começam simples (ex.: design de banners) e evoluem para complexos (ex.: integração Figma-MySQL).  
- **Trabalho em Grupo**: O Exercício 12 pode ser feito em duplas, com divisão clara de tarefas.  
- **Critérios de Avaliação**:  
  - Correção: Designs e bancos funcionam conforme solicitado.  
  - Usabilidade: Interfaces são intuitivas e bancos são bem modelados.  
  - Integração: Conexão clara entre UI/UX e MySQL no projeto final.  
  - Criatividade: Soluções visuais ou funcionais inovadoras.