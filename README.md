# Task Manager API

This repository contains the **backend** of the Task Manager project, a CRUD API developed with **Node.js**, **Express**, **Prisma**, and **MongoDB Atlas** as the database.

## Technologies Used

- **Node.js**: JavaScript runtime environment for backend.
- **Express**: Framework for building RESTful APIs.
- **Prisma**: ORM (Object-Relational Mapping) to interact with MongoDB.
- **MongoDB Atlas**: Scalable and fully managed NoSQL database in the cloud.

## Features

The API allows the following CRUD operations to manage tasks:

- **Create Task**: Adds a new task to the list.
- **List Tasks**: Retrieves all stored tasks.
- **Update Task**: Modifies an existing task.
- **Delete Task**: Removes a task from the database.

## Prerequisites

Ensure you have the following installed:

- **Node.js**: [Download and install here](https://nodejs.org/)
- **MongoDB Atlas**: A MongoDB Atlas account from [here](https://www.mongodb.com/cloud/atlas).

## Installation

Follow these steps to run the API locally:

1. **Clone the repository**:
```
   git clone https://github.com/tulioanesio/task-manager.git  
   cd task-manager-api
```
2. **Install the dependencies**:
```
   npm install
```
3. **Configure the environment variables**:

   Create a `.env` file at the root of the project and add the add your connection string into the application code:

**GENERIC EXEMPLE**
```
DATABASE_URL="mongodb+srv://test:test@cluster0.ns1yp.mongodb.net/myFirstDatabase"
```
4. **Initialize the database with Prisma**:
```
   npx prisma studio
```
5. **Start the server**:

```
   node server.js
```
The API will be available at: http://localhost:3000

## Live Demo

The project is deployed and available on **Vercel**:

- [**Task Manager**](https://task-manager-sable-mu.vercel.app/)
