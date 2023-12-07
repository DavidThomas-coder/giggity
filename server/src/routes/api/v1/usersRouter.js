import express from "express";
import { ValidationError } from "objection";
import UserSerializer from "../../../serializers/UserSerializer.js";
import { User } from "../../../models/index.js";

const usersRouter = new express.Router();

usersRouter.get("/", async (req, res) => {
  try {
      const users = await User.query()
      // const serializedGig = GigSerializer.showGigDetails(gigs)
      // ass
      const serializedUsers = users.map(user => UserSerializer.showUserDetails(user))
      res.status(200).json({ users: serializedUsers })
  } catch (error) {
      console.log(error)
      res.status(500).json({errors: error.message})
  }
})

usersRouter.get("/id", async (req, res) => {
  const userId = req.params.id

  try {
    const user = await User.query().findById(userId)
  }
})

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
    return res.status(500).json({ error: error.message });
  }
});

export default usersRouter;