import express from "express";
import { signup,login,logout } from "../controller/contentapi.js";
import { protectroute } from "../middleware/auth.middleware.js";
import { updateProfile } from "../controller/contentapi.js";
const router = express.Router();
 
router.post("/signup",signup);
router.post("/login",login );
    
router.put("/update-profile",protectroute, updateProfile);


router.post("/logout", logout);
router.get("/protected", protectroute, (req, res) => {
    res.status(200).json({ message: "You have accessed a protected route", user: req.user });
});

export default router;
