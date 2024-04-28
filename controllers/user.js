const users = [
  {
    id: "1",
    email: "amelrazinijob5@gmail.com",
    password: "azerty",
    name: "amell",
    role: "user",
  },
  {
    id: "2",
    email: "amelrazini5@gmail.com",
    password: "azerty",
    name: "amel",
    role: "admin",
  },
];

export const login = async (req, res) => {
  const FoundUser = users.find((user) => user.email === req.body.email);
  if (!FoundUser) {
    return res.status(404).json({ message: "email is incorrect" });
  }

  const match = await bcrypt.compare(req.body.password, FoundUser.password);

  if (match) {
    return res.status(200).json({ user: FoundUser });
  } else {
    res.status(404).json({ message: "email or password is incorrect" });

    // if (FoundUser.password === req.body.password) {
    //   res.status(200).json({ user: FoundUser });
    // } else {
    //   res.status(404).json({ message: "email or password is incorrect" });
    // }
  }
};

export const createUser = (req, res) => {
  const FoundUser = users.find((user) => user.email === req.body.email);
  if (FoundUser) {
    return res.status(404).json({ message: "already exist" });
  }

  bcrypt.hash(req.body.password, 10, function (err, hash) {
    const newUser = {
      email: "amel@gmail.com",
      password: "azerty",
    };
    users.push(newUser);
    res.status(201).json({ message });
  });
};
