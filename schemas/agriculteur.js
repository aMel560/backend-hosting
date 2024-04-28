import mongoose from "mongoose";

const agriculteurSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    prenom: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: "true",
    },
    role: {
      type: String,
      enum: ["admin", "agriculteur", "client"],
      default: "agriculteur",
    },
    fruits: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Fruit",
      },
    ],
  },
  { timestamps: true }
);
export const agriculteur = mongoose.model("agriculteur", agriculteurSchema);
