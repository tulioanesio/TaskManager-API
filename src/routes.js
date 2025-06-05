import express from "express";
import auth from "./middlewares/auth.js";
import { registerUser, loginUser } from "./controllers/userController.js";
import { getTask, postTask, putTask, deleteTask } from "./controllers/taskController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/tasks", auth, getTask);
router.post("/tasks", auth, postTask);
router.put("/tasks/:id", auth, putTask);
router.delete("/tasks/:id", auth, deleteTask);

export default router;
