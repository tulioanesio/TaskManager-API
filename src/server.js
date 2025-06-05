import express from "express";
import userRoutes from "./routes.js"
import taskRoutes from "./routes.js"
import dotenv from "dotenv"
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config()

app.use("/", userRoutes)
app.use("/", taskRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
