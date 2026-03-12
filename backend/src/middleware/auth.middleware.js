import jwt from "jsonwebtoken";
import user from "../models/user.js";


export const protectroute = async(req, res, next) =>{
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const currentUser = await user.findById(decoded.id).select("-password");

        if (!currentUser) {
            return res.status(404).json({ message: "User not found" });
        }

        req.user = currentUser;
        next();
    } catch (error) {
        console.error("Error in protectroute middleware:", error);
        res.status(500).json({ message: "Server error" });
    }
};