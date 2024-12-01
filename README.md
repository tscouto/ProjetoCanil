# Pet Adoption Web App

Este é um projeto de um sistema de adoção de animais, com foco na exibição de diferentes tipos de animais (cachorros, gatos e peixes) disponíveis para adoção. O aplicativo é baseado em uma plataforma web que permite visualizar, pesquisar e filtrar animais por tipo ou nome.

## Funcionalidades

- **Página Inicial**: Exibe todos os animais disponíveis para adoção (cachorros, gatos e peixes).
- **Cachorros**: Exibe uma lista de cachorros disponíveis para adoção, com imagens, nome, cor e sexo.
- **Gatos**: Exibe uma lista de gatos disponíveis para adoção, com informações semelhantes aos cachorros.
- **Peixes**: Exibe uma lista de peixes disponíveis para adoção, com as mesmas informações.
- **Busca**: Permite ao usuário procurar por animais específicos pelo nome.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework para construção de APIs e rotas.
- **Handlebars**: Motor de templates para renderização de páginas dinâmicas.
- **CSS**: Estilos para o layout e responsividade do site.
- **JavaScript**: Linguagem de programação para interatividade e manipulação de dados.

## Instalação

Para rodar o projeto localmente, siga as etapas abaixo:

### 1. Clone o repositório

```bash
git clone https://github.com/tscouto/ProjetoCanil.git

```
2. Navegue até a pasta do projeto
```bash
Copiar código
cd pet-adoption
```
3. Instale as dependências

```bash
Copiar código
npm install

```

4. Inicie o servidor
```bash
Copiar código
npm start
O servidor estará rodando em http://localhost:3000.

```

Estrutura de Pastas
```bash
Copiar código
/pet-adoption
    /node_modules      # Dependências do projeto
    /views             # Arquivos de templates Handlebars
    /public            # Arquivos públicos como imagens e CSS
    /models            # Modelos de dados e lógica de negócios
    /controllers       # Funções que controlam o fluxo das rotas
    /helpers           # Funções auxiliares como a criação do menu
    package.json       # Dependências e scripts do projeto
    server.js          # Arquivo principal do servidor Express
```
Como Funciona
Página Inicial: Ao acessar o site, você verá um banner com o título "Todos os animais" e uma lista com os animais disponíveis.
Filtros de Animais: O usuário pode acessar categorias específicas de animais (Cachorros, Gatos, Peixes) clicando nos links correspondentes.
Busca: Você pode procurar animais específicos digitando um nome na barra de pesquisa. A busca é feita em tempo real e retorna uma lista de animais que correspondem ao nome digitado.


imagens do projeto

Tela principal:
![tela principal](https://github.com/user-attachments/assets/d57bf6fb-f769-4f9d-ab80-584bf6d9b4af)

Tela Exibição de Dogs:
![lista só de cachorros](https://github.com/user-attachments/assets/1b83e03f-64db-45d4-ad15-09c7fe3c74f4)

Tela Exibição de Gatos:
![lista de so de gatos](https://github.com/user-attachments/assets/763e7d7f-63b0-480f-a7c0-0b4b0ca686aa)

Tela Exibição de Peixes:
![lista só de peixes](https://github.com/user-attachments/assets/3e5344b1-504c-4318-bd3f-54f57c46f02e)

