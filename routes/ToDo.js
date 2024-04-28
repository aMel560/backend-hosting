import express from "express";
import { GetAllFruits, CreateFruits } from "../controllers/fruits.js";

const router = express.Router();

router.get("/", GetAlltasks);

router.post("/", CreateTask);
router.put("/",Check);
router.delete("/",DeleteTask);
export default router;