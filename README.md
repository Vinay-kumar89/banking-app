# Banking System API

This is a simple backend assignment that provides basic banking functionalities such as login, checking account balance, and depositing money.

The project is built using Node.js, Express, Sequelize, and PostgreSQL.

---

## Features

- User login using email and PIN
- Check account balance
- Deposit money (with transaction support)
- Swagger API documentation

---

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- Swagger

---

## Setup Instructions

### 1. Install dependencies (if needed)

Run the following command:

npm install

---

### 2. Environment variables

A .env file is already included in the project.

If needed, you can update it as per your local setup:

DB_HOST=localhost
DB_PORT=5433
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=banking_db

---

### 3. Create database

Create a database named:banking_db;

You can create it using pgAdmin or SQL query:CREATE DATABASE banking_db;

or just go to the connected server like PostgreSql 17 then go to the Database and create->database->banking_db

---

### 4. Run the project

npm start

---

## Swagger API

After starting the server, open:

http://localhost:3000/api-docs

---

## API Endpoints

### 1. Login

POST /login

Request body:

{
"email": "alice@example.com",
"pin": 1234
}

---

### 2. Get Balance

GET /balance/:userId

Request body:{userId}

---

### 3. Deposit

POST /deposit

Request body:

{
"userId": 1,
"amount": 500
}

---

## Notes

- Tables are created automatically on first run
- Initial sample data is inserted if database is empty
- Deposit API uses transaction to ensure data consistency

---

## Author

Vinay Kumar
