import  express from "express";// module mwi import kaam karega aur commonjs mai require
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";
import message from  "./routes/message.route.js";
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use("/api/auth", authRouter)
app.use("/api/message", message)
app.get("/",(req,res)=>{
  res.send("hello world");
});
app.listen(PORT,()=>{
  console.log("server started");

});