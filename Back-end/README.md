# Projeto de Conexão com Banco de Dados MySQL usando Sequelize

Este projeto demonstra como configurar e conectar a um banco de dados MySQL usando Sequelize no Node.js.

## Tecnologias Utilizadas

- Node.js
- Express
- Sequelize
- MySQL
- bcrypt (para hashing de senhas)
- jsonwebtoken (para geração de tokens JWT)
- nodemon (para reinicialização automática do servidor durante o desenvolvimento)

## Pré-requisitos

- Node.js instalado
- Nodemon instalado
- Instalação do Sequelize e MySQL2
- Um banco de dados MySQL criado

## Configuração

1. Clone o repositório:
    ```sh
    git clone https://github.com/Igormachado90/HAND-REACT_NATIVE.git
    ```

2. Instale as dependências:
    ```sh
    cd HAND-REACT_NATIVE
    npm install ou npm i
    ```

3. Instale o `nodemon` globalmente (opcional, se você preferir usar globalmente):

    ```bash
    npm install -g nodemon ou npm i -g nodemon
    ```

4. Instale o Sequelize e o `mysql2`:

    Sequelize é uma ORM (Object-Relational Mapper) que facilita a interação com bancos de dados SQL, e o `mysql2` é o driver MySQL para Sequelize.

    ```bash
    npm install sequelize mysql2
    ```

5. Configure o banco de dados:

    Crie banco de dados chamado `hand_banco_de_dados`.e ajuste as configurações no arquivo `config/database.js` (ou como você seu arquivo de configuração de banco de dados) com suas credenciais MySQL.

    ```js
    const { Sequelize } = require('sequelize');

    // Configurações de conexão com banco de dados MySQL
    const connection = new Sequelize(
      {
        host: 'localhost',
        dialect: 'mysql',
        username: '', // Nome de usuário para acessar banco de dados
        password: '', // Senha para acessar banco de dados
        database: '', // Nome banco de dados
        define: {
          timestamps: true,
          underscored: true,
        }
      }
    );

    // Conectar ao banco de dados
    connection.authenticate()
      .then(() => {
        console.log('>>>>>>>>>>> Conectado ao banco de dados MySQL. <<<<<<<<<<<<<<');
      })
      .catch((err) => {
        console.error('Erro ao conectar ao banco de dados:', err);
      });

    module.exports = connection;
    ```

### Estrutura do Projeto

- `config/database.js`: Configurações do banco de dados.
- `models/`: Contém os modelos Sequelize.
  - `user.js`: Modelo de usuário.
- `routes/auth.js`: Rotas para registro e login.
- `app.js`: Configuração do servidor Express.

## Uso

Para iniciar o projeto, execute:

```sh
npx nodemon app.js
