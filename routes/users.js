import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();
const users = [
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

export default router;
