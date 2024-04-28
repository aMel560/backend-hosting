import express from "express";
import {
  GetAllFruits,
  CreateFruits,
  GetFruit,
  deleteAllfruits,
  deletefruits,
  updatefruits,
  Createagriculteur,
} from "../controllers/fruits.js";

const router = express.Router();

router.get("/", GetAllFruits);
router.get("/:id", GetFruit);
router.post("/", CreateFruits);
router.delete("/:id", deletefruits);
router.delete("/", deleteAllfruits);
router.put("/", updatefruits);
router.post("/agriculteur", Createagriculteur);

export default router;
