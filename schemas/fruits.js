import mongoose from "mongoose";
import { agriculteur } from "./agriculteur.js";

const fruitsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: "true",
  },
  img: {
    type: String,
  },
  agriculteur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "agriculteur",
  },
});
export const Fruit = mongoose.model("Fruit", fruitsSchema);
