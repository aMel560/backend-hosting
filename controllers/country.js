import { Country } from "../schemas/country.js";

export const Createcountry = async (req, res) => {
  const response = await Country.insertMany(req.body);

  res.json(response);
};
