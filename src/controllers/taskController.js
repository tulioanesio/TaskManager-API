import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const postTask = async (req, res) => {
  await prisma.task.create({
    data: {
      task: req.body.task,
    },
  });

  res.status(201).json(req.body, { message: "Task created sucessfully!" });
};

export const getTask = async (req, res) => {
  const tasks = await prisma.task.findMany();

  res.status(200).json(tasks, { message: "Task listed sucessfully!" });
};

export const putTask = async (req, res) => {
  await prisma.task.update({
        where:{
            id: Number(req.params.id)
        },
      data: {
        task: req.body.task,
      },
    });
  
    res.status(201).json(req.body, { message: "Task edited sucessfully!"});
  };

export const deleteTask = async (req, res) => {
  await prisma.task.delete({
    where: {
      id: Number(req.params.id),
    },
  });
  res.status(200).json({ message: "Task deleted sucessfully!" });
};
