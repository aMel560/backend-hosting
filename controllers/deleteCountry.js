import { Country } from "../schemas/country.js";

export const deleteCountry = async (req, res) => {
  const response = await Country.deleteMany({ name: req.body.name });

  res.json(response);
};
