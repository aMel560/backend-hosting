import express from "express";
import dotenv from "dotenv";
import routerFruits from "./routes/fruits.js";
import bodyParser from "body-parser";
import routerEmail from "./routes/email.js";
import cors from "cors";
import routerusers from "./routes/users.js";
import routerReplicate from "./routes/replicate.js";
import { mongoose } from "mongoose";
import { Country } from "./schemas/country.js";
import routerCountry from "./routes/country.js";

// import routerToDo fro

dotenv.config();
const app = express();
app.use(bodyParser.json());
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
async function insertData() {
  const countries = {
    name: "usa",
    population: 1000000,
    superficie: "100000",
    taille: "large",
  };
  const res = await Country.insertMany(countries);
  console.log("res", res);
}
insertData();
//routes
app.use(cors({ origin: "*" }));
app.use("/fruits", routerFruits);
app.use("/send-email", routerEmail);
app.use("/users", routerusers);
app.use("/replicate", routerReplicate);
app.use("/country", routerCountry);
// app.use("/todos", routerToDo);
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
