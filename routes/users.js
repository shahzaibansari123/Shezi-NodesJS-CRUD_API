import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();
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

// All routes already starts with /users
router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;

  //   const userId = uuidv4();
  // const userWithId = { ...user, id: uuidv4() };
  users.push({ ...user, id: uuidv4() });

  res.send(`user with name ${user.firstName} added to the database`);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);
  res.send(`user with id: ${id} remove from mock DB`);
});


router.patch("/:id", (req, res) => {
    const { id } = req.params;
    const {firstName,lastName,age} = req.body;
  
    const user = users.find((user) => user.id === id);

    if(firstName) user.firstName=firstName;
    if(lastName) user.lastName=lastName;
    if(age) user.age=age;
    
    res.send(`user with the id ${id} has been updated`);
  });

export default router;
