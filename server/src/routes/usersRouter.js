import express from "express";
import { ValidationError } from "objection";
import UserSerializer from "../serializers/UserSerializer.js";
import { User } from "../../../models/index.js";

const usersRouter = new express.Router();

usersRouter.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const persistedUser = await User.query().insertAndFetch({ email, password });
    const persistedUserSerialized = UserSerializer.showUserDetails(persistedUser);
    return req.login(persistedUser, () => {
      return res.status(201).json({ user: persistedUserSerialized });
    });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data });
    }
    return res.status(500).json({ error: errors.message });
  }
});

export default usersRouter;