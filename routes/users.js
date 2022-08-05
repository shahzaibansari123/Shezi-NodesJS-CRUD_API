import express from "express";

import {
  createUser,
  getUsers,
  userDetails,
  deleteUser,
  updateUserDetails,
} from "../controllers/users.js";

const router = express.Router();

// All routes already starts with /users
router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", userDetails);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUserDetails);

export default router;
