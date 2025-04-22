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

   Create a `.env` file at the root of the project and add the following line:
```
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/task-manager?retryWrites=true&w=majority
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
