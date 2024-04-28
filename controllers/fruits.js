// const fruits = [
//   {
//     id: 1,
//     name: "Apple",
//     color: "red",
//   },
//   {
//     id: 2,
//     name: "Banana",
//     color: "yellow",
//   },
// ];
import { agriculteur } from "../schemas/agriculteur.js";
import { Fruit } from "../schemas/fruits.js";
export const GetAllFruits = async (req, res) => {
  const response = await Fruit.find().populate("agriculteur");
  res.json(response);
};
export const GetFruit = async (req, res) => {
  const response = await Fruit.find({ _id: req.params.id }).populate(
    "agriculteur"
  );
  res.json(response);
};
export const CreateFruits = async (req, res) => {
  const response = await Fruit.insertMany(req.body);
  // fruits.map((fruits) => {
  //   if (fruits.id === req.body.id) {
  //     fruits.name = req.body.name;
  //     fruits.color = req.body.color;
  //   }
  // });
  res.json(response);
};
export const deletefruits = async (req, res) => {
  const response = await Fruit.deleteOne({ name: req.params.id });
  res.json(response);
};
export const deleteAllfruits = async (req, res) => {
  const response = await Fruit.deleteMany();
  res.json(response);
};
export const updatefruits = async (req, res) => {
  const response = await Fruit.updateMany(
    { name: req.body.name },
    { count: 5, price: 20 }
  );
  res.json(response);
};
export const Createagriculteur = async (req, res) => {
  const response = await agriculteur.create(req.body);
  res.json(response);
};
