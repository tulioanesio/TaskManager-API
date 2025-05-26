# Task Manager API

This repository contains the **backend** of the [Task Manager](https://github.com/tulioanesio/task-manager) project, a CRUD API developed with **Node.js**, **Express**, **Prisma**, and **PostgreSQL** as the database.

## Technologies Used

- **Node.js**: Ambiente de execução JavaScript no backend.
- **Express**: Framework para criação de APIs RESTful.
- **Prisma**: ORM para interação com o banco de dados PostgreSQL.
- **PostgreSQL**: Relational database used to store tasks.
- **Docker**: Containerization platform for deploying and running the application.

## Features

The API allows the following CRUD operations to manage tasks:

- **Create Task**: Adds a new task to the list.
- **List Tasks**: Retrieves all stored tasks.
- **Delete Task**: Removes a task from the database.

## Prerequisites

Ensure you have the following installed:

- **Node.js**: [Download and install here](https://nodejs.org/)
- **Docker**: [Download and install Docker](https://docs.docker.com/get-docker/)

## Installation

Follow these steps to run the API locally:

1. **Clone the repository**:
```
   git clone https://github.com/tulioanesio/TaskManager-API 
```
2. **Install the dependencies**:
```
   npm install
```
3. **Configure the environment variables**:

   Create a `.env` file at the root of the project and add the add your connection string into the application code:

**GENERIC EXEMPLE**
```
DATABASE_URL="postgresql://postgres:postgres@db:5432/task_manager_db?schema=public"
POSTGRES_USER: "your_postgres_user"
POSTGRES_PASSWORD: "your_postgres_password"
POSTGRES_DB: "your_postgres_database"
```
4. **Initialize the database with Prisma**:
```
   npx prisma migrate dev
```
5. **Start the server**:

```
   node server.js
```
The API will be available at: http://localhost:3000
