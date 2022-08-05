import { v4 as uuidv4 } from "uuid";

let users = [
  //   {
  //     firstName: "Shahzaib",
  //     lastName: "Ansari",
  //     age: 21,
  //   },
  //   {
  //     firstName: "rushal",
  //     lastName: "Ansari",
  //     age: 20,
  //   },
];

export const getUsers = (req, res) => {
  console.log(users);
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;

  //   const userId = uuidv4();
  // const userWithId = { ...user, id: uuidv4() };

  users.push({ ...user, id: uuidv4() });

  res.send(`user with name ${user.firstName} added to the database`);
};

export const userDetails = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);
  res.send(`user with id: ${id} remove from mock DB`);
};

export const updateUserDetails = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`user with the id ${id} has been updated`);
};
