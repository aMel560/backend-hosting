import express from "express";

import { Createcountry } from "../controllers/country.js";
import { getCountry } from "../controllers/getCountry.js";
import { deleteCountry } from "../controllers/deleteCountry.js";
import { updateCountry } from "../controllers/updateCountry.js";

const router = express.Router();

router.post("/country", Createcountry);
router.delete("/deletecountry", deleteCountry);
router.get("/getcountry", getCountry);
router.put("/putcountry", updateCountry);

export default router;
