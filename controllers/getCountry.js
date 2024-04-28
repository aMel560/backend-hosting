import { Country } from "../schemas/country.js";

export const getCountry = async (req, res) => {
  const response = await Country.find(); //quand on donne pas de parametres ca veut dire qu'il va get tout les elements
  res.json(response);
};
