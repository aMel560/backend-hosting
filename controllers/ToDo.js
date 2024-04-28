const Tasks = [
  {
    id: 1,
    title: "Task 1",
    desc: "Description 1",
  },
  {
    id: 2,
    title: "Task 2",
    desc: "Description 2",
  },
  {
    id: 3,
    title: "Task 3",
    desc: "Description 3",
  },
];
export const GetAllFruits = (req, res) => {
  res.json(fruits);
};
export const CreateFruits = (req, res) => {
  fruits.map((fruits) => {
    if (fruits.id === req.body.id) {
      fruits.name = req.body.name;
      fruits.color = req.body.color;
    }
  });
  res.json(fruits);
};
