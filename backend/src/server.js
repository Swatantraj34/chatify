import express from "express";
import authRouter from "./routes/auth.route.js";
import messageRouter from "./routes/message.route.js";
import { mongodb } from "./liv/db.js";
import dotenv from "dotenv";
import cookieparser from "cookie-parser";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors({origin: "http://localhost:5173", credentials: true}));
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieparser()); 
app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

mongodb();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});