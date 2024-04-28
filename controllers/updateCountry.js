import { Country } from "../schemas/country.js";

export const updateCountry = async (req, res) => {
  const response = await Country.updateMany(
    { name: req.body.name },
    { population: req.body.population, superficie: req.body.superficie }
  );

  res.json(response);
};
