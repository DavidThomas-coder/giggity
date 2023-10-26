import express from "express";
import userSessionsRouter from "./userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import router from "./clientRouter.js";
const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);
rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);

//place your server-side routes here
rootRouter.use('/api/v1/user-sessions', userSessionsRouter);
rootRouter.use('/api/v1/users', usersRouter);
rootRouter.use('/api/v1/gigs', gigsRouter);
rootRouter.use('/api/v1/gigReviews', gigReviewsRouter)

export default rootRouter;
