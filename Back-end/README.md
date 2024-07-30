# Projeto de Conexão com Banco de Dados MySQL usando Sequelize

Este projeto demonstra como configurar e conectar a um banco de dados MySQL usando Sequelize no Node.js.

## Pré-requisitos

- Node.js instalado
- MySQL instalado e em execução
- Um banco de dados MySQL criado

## Configuração

1. Clone o repositório:
    ```sh
    git clone https://github.com/Igormachado90/HAND-REACT_NATIVE.git
    ```

2. Instale as dependências:
    ```sh
    cd HAND-REACT_NATIVE
    npm install
    ```

3. Configure o banco de dados:

    Certifique-se de que o MySQL esteja em execução e que você tenha um banco de dados chamado `hand_banco_de_dados`. Atualize o arquivo `db.js` (ou como você nomeou seu arquivo de configuração de banco de dados) com suas credenciais MySQL.

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

## Uso

Para iniciar o projeto, execute:

```sh
node db.js
