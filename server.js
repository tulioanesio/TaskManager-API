import express from "express";
import cors from 'cors'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors())

app.post("/tasks", async (req, res) => {
  await prisma.task.create({
    data: {
      task: req.body.task,
    },
  });

  res.status(201).json(req.body, { message: "Task created sucessfully!"});
});

app.get("/tasks", async (req, res) => {
  const tasks = await prisma.task.findMany();

  res.status(200).json(tasks, { message: "Task listed sucessfully!"});
});

app.put("/tasks/:id", async (req, res) => {
    await prisma.task.update({
        where:{
            id: req.params.id
        },
      data: {
        task: req.body.task,
      },
    });
  
    res.status(201).json(req.body, { message: "Task edited sucessfully!"});
  });

app.delete("/tasks/:id", async (req, res) => {

    await prisma.task.delete({
        where:{
            id: Number(req.params.id)
        }
    })
    res.status(200).json({ message: "Task deleted sucessfully!"});

})

app.listen(3000);
