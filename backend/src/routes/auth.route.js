import express from "express";
import { signup,login,logout } from "../controller/contentapi.js";
import { protectroute } from "../middleware/auth.middleware.js";
import { updateProfile } from "../controller/contentapi.js";
import { arcjetMiddleware } from "../middleware/arcjet.middleware.js";
const router = express.Router();
router.get("/test",arcjetMiddleware,(req, res) => { 

res.status(200).json({message: "welcome to auth api"});
});



















 
router.post("/signup",signup);
router.post("/login",arcjetMiddleware,login );
    
router.put("/update-profile",protectroute, updateProfile);


router.post("/logout", logout);
router.get("/protected", protectroute, (req, res) => {
    res.status(200).json({ message: "You have accessed a protected route", user: req.user });
});

export default router;
