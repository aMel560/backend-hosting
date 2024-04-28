import express from "express";
import { SendEmail } from "../controllers/email.js";

const router = express.Router();

router.post("/", SendEmail);

export default router;
