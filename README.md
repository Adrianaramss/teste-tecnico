# 📖 Sobre o projeto
O projeto é um sistema de cadastro de usuários, onde as pessoas podem se inscrever fornecendo informações como nome, e-mail e senha. Depois de se inscreverem, elas podem visualizar, atualizar ou excluir suas informações conforme necessário. 

# 📝 Endpoints

- Get users: Retorna todos os usuários cadastrados no banco de dados;
- Post users: Cria um novo usuário com os dados fornecidos no corpo da requisição;
- Put users id: Atualiza os dados de um usuário existente com o ID fornecido;
- Delete users id: Deleta o usuário com o ID fornecido.


# 💻 Tecnologias utilizadas no Projeto

- Node
- Typescript 
- Express
- SQL e SQLite
- Postman
# 🛰 Demostração requisições 

## 🎯 BUSCAR TODOS USUARIOS DO BANCO DE DADOS

GET

```URL
'https://teste-tecnico-4.onrender.com/users'
```

Output
```JSON 
{
  "message": "Usuarios:",
  "result": [
    {
      "id": "f001",
      "name": "Adriana",
      "email": "adriana123@email.com",
      "password": "adriana123"
    },
    {
      "id": "f002",
      "name": "Mariana",
      "email": "Mariana@email.com",
      "password": "mariana00"
    }
  ]
}
```
## 🎯 REGISTRA UM USUÁRIO NO BANCO DE DADOS.

POST
```URL
'https://teste-tecnico-4.onrender.com/users'
```
  
```JSON
 {   "id": "f003",
    "name": "Rafa",
    "email": "Rafa2022@gmail.com",
    "password": "martaA1@"
}
  

```
Output
```JSON 
{
  "messagem": "usuario criado com sucesso",
  "user": {
    "id": "f003",
    "name": "Rafa",
    "email": "Rafa2022@gmail.com",
    "password": "martaA1@"
  }
}
```
## 🎯 EDITAR UM USUARIO PELO ID.

PUT
```URL
'https://teste-tecnico-4.onrender.com/users/:id'
```
  
```JSON
       { "id": "f001",
        "name": "Adri",
        "email": "adriana123@email.com",
        "password": "adriana123"
        }

```
Output
```JSON 
{
  "message": "Usuário atualizado com sucesso",
  "user": {
    "id": "f001",
    "name": "Adri",
    "email": "adriana123@email.com",
    "password": "adriana123"
  }
}
```
## 🎯 EXCLUIR O  USUARIO PELO ID.

DEL
```URL
'https://teste-tecnico-4.onrender.com/users/:id'
```
  
```PATH VARIABLES
  id    f001

```
```JSON 
{
  "message": "user deletado com sucesso"
}
```
# 📖 Documentação Postman
https://documenter.getpostman.com/view/24460801/2sA3Bj7Z9N

# 🔗Deploy   
https://teste-tecnico-4.onrender.com


# 🛰 Como executar o projeto 
```bash
# Instalando dependências
npm install

# estabelecer conexão com bancos de dados com 
npm run start ou npm run dev
```
# 📫 Contato
E-mail - adrianascosta9@gmail.com

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/adriana-ramss/)
