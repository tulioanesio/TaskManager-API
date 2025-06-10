import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const postTask = async (req, res) => {
  await prisma.task.create({
    data: {
      task: req.body.task,
      user: {
        connect: { id: req.userId },
      },
    },
  });

  res.status(201).json(req.body, { message: "Task created sucessfully!" });
};

export const getTask = async (req, res) => {
  const tasks = await prisma.task.findMany({
    where: {
      userId: req.userId,
    },
  });

  res.status(200).json(tasks, { message: "Task listed sucessfully!" });
};

export const putTask = async (req, res) => {
  const taskId = Number(req.params.id);

  const existingTask = await prisma.task.findUnique({
    where: { id: taskId },
  });

  if (!existingTask || existingTask.userId !== req.userId) {
    return res.status(403).json({ message: "You cannot edit this task." });
  }

  await prisma.task.update({
    where: {
      id: taskId,
    },
    data: {
      task: req.body.task,
    },
  });

  res.status(201).json(req.body, { message: "Task edited sucessfully!" });
};

export const deleteTask = async (req, res) => {
  const taskId = Number(req.params.id);

  const existingTask = await prisma.task.findUnique({
    where: { id: taskId },
  });

  if (!existingTask || existingTask.userId !== req.userId) {
    return res.status(403).json({ message: "You cannot delete this task." });
  }

  await prisma.task.delete({
    where: {
      id: taskId,
    },
  });
  res.status(200).json({ message: "Task deleted sucessfully!" });
};

export const patchTask = async (req, res) => {
  const taskId = Number(req.params.id);
  const { isDone } = req.body;

  try {
    const existingTask = await prisma.task.findUnique({
      where: { id: taskId },
    });

    if (!existingTask || existingTask.userId !== req.userId) {
      return res.status(403).json({ message: "You cannot update this task." });
    }

    const updatedTask = await prisma.task.update({
      where: { id: taskId },
      data: { isDone },
    });

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: "Error updating task" });
  }
};
