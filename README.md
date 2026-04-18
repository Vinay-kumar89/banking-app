# Banking System API

This project is a simple backend application that provides basic banking functionalities like login, checking account balance, and depositing money.

It is built using Node.js, Express, Sequelize, and PostgreSQL.

---

## Features

- User login using email and PIN
- Fetch account balance
- Deposit money into account
- API testing using Swagger
- Database integration using Sequelize ORM

---

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- Swagger (for API documentation)

---

## Setup Instructions

### 1. Install dependencies

Run the following command:

npm install

---

### 2. Create .env file

Create a .env file in the root folder and add the following:

DB_HOST=localhost
DB_PORT=5433
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=banking_db

---

### 3. Create database

Create a database named:banking_db

You can create it using pgAdmin or SQL query:CREATE DATABASE banking_db;

or just go to the connected server like PostgreSql 17 then go to the Database and create->database->banking_db

---

### 4. Run the project

npm start

---

## Swagger API

After running the server, open:

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

## Initial Data

The application inserts some default users when the database is empty:

- Alice (balance: 1000)
- Bob (balance: 500)

---

## Notes

- Deposit API uses transaction to ensure data consistency
- Basic error handling is implemented
- This is a simplified version and not production-ready

---

## Author

Vinay Kumar
