# 🎬 Filmes CRUD App

Aplicação web full-stack para gerenciar filmes, incluindo autenticação de usuários, CRUD de filmes e paginação.

---

## 🛠 Tecnologias Utilizadas

- **Frontend**: React, Redux Toolkit, React Router, Axios, CSS Modules
    
- **Backend**: Laravel 12, PHP 8
    
- **Banco de dados**: MySQL via Docker
    
- **Autenticação**: JWT
    
- **Outras ferramentas**: Docker, Docker Compose, Postman (testes API)
    

---

## 📦 Setup do Projeto

### Pré-requisitos

- Docker e Docker Compose instalados
    

### Backend + Banco de dados

1. Navegue até o diretório do backend:
    

```bash
cd backend
```


2. Copie o `env.example` e cole no seu `.env`:
    

```bash
APP_NAME=JactoMovies

APP_ENV=local

APP_KEY=base64:SEU_APP_KEY_AQUI

APP_DEBUG=true

APP_URL=http://localhost

  

LOG_CHANNEL=stack

LOG_LEVEL=debug

  

DB_CONNECTION=pgsql

DB_HOST=db

DB_PORT=5432

DB_DATABASE=laravel

DB_USERNAME=laravel

DB_PASSWORD=laravel

  

BROADCAST_DRIVER=log

CACHE_DRIVER=file

QUEUE_CONNECTION=sync

SESSION_DRIVER=file

SESSION_LIFETIME=120

  

JWT_SECRET=

API_AUTH_DRIVER=jwt
```

> Observação: o `DB_HOST` deve ser o nome do serviço do banco definido no Docker Compose (`db`).

3. Suba os containers:
    

```bash
sudo docker-compose up -d
```

4. Caso dê algum erro, tente atualizar o composer.lock dentro da pasta backend:
```bash
cd backend
sudo composer update --no-dev

#Volte para a pasta raiz
cd ..
# Depois suba o container novamente
sudo docker-compose up -d
```

4. Entre no container do back end:
```bash
sudo docker exec -it laravel_app bash
```
5. Execute as migrations, seeds e gere o JWT secret:
    

```bash
php artisan migrate
php artisan db:seed
php artisan jwt:secret
```

6. Saia do container:
```bash
exit
```
O backend estará disponível em: `http://localhost:8000`

---

### Frontend

O frontend estará disponível em: `http://localhost:5173`

> ⚠️ Certifique-se de que a URL da API no `api.js` aponta para o backend correto (`http://localhost:8000`).

---

## 🔑 Funcionalidades

### Autenticação

- Registro de usuário
    
- Login
    
- Logout
    
- Redirecionamento após login ou registro
    

### Filmes

- Listar filmes com **paginação**
    
- Criar novo filme
    
- Editar filme existente
    
- Visualizar detalhes do filme
    
- Excluir filme
    

---

## 🔗 Rotas Frontend (React Router)

|Rota|Componente|Observações|
|---|---|---|
|`/login`|`Login`|Formulário de login|
|`/register`|`SignUp`|Cadastro de novo usuário|
|`/`|`Home`|Lista de filmes com paginação|
|`/filme/:id`|`FilmeDetalhes`|Visualizar detalhes do filme|
|`/filme/:id/editar`|`FilmeEditar`|Editar filme existente|
|`/filme/criar`|`FilmeCriar`|Criar novo filme|

---

## 🗂 Rotas Backend (Laravel)

| Método | Rota               | Descrição                               |
| ------ | ------------------ | --------------------------------------- |
| GET    | `/api/filmes`      | Listar filmes (paginação 12 por página) |
| GET    | `/api/filmes/{id}` | Obter detalhes de um filme              |
| POST   | `/api/filmes`      | Criar novo filme                        |
| PUT    | `/api/filmes/{id}` | Atualizar filme existente               |
| DELETE | `/api/filmes/{id}` | Excluir filme                           |
| POST   | `/api/register`    | Registrar usuário                       |
| POST   | `/api/login`       | Autenticar usuário                      |

> 💡 As rotas de filmes devem ser protegidas com middleware JWT.

---

## 🔧 Redux

### Slices

- **authSlice**
    
    - `loginUser`: login do usuário
        
    - `registerUser`: registro de usuário
        
    - `logoutUser`: logout
        
- **filmesSlice**
    
    - `fetchFilmes`: busca filmes com paginação
        
    - Armazena filmes e dados de paginação (`currentPage`, `lastPage`, `total`, `perPage`)
        

---

## 🎨 Estilo

- CSS modular com classes específicas
    
- Layout responsivo
    
- Componentes reutilizáveis: `DashboardLayout`, `FilmeCard`, `PrivateRoute`,  `Header`
    
- Paginação estilizada

---

## 📌 Observações

- Todas as requisições autenticadas devem enviar o token JWT no header `Authorization: Bearer <token>`.
    
- Paginação implementada com dados retornados da API.
    
- A aplicação está preparada para **CRUD completo de filmes**.
    
- Código limpo e organizado seguindo boas práticas de React e Laravel.
    
- Docker facilita subir o backend, front-end e banco sem instalar localmente.
