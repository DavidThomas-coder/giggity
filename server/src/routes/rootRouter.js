import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import gigReviewsRouter from "./api/v1/gigReviewsRouter.js";
import gigsRouter from "./api/v1/gigsRouter.js";
import userReviewsRouter from "./api/v1/userReviewsRouter.js";
import usersGigsRouter from "./api/v1/usersGigsRouter.js";

const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);
rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);
rootRouter.use("/api/v1/users", usersGigsRouter);

//place your server-side routes here
rootRouter.use('/api/v1/gigs', gigsRouter);
rootRouter.use('/api/v1/gigReviews', gigReviewsRouter)
rootRouter.use('/api/v1/userReviews', userReviewsRouter)



export default rootRouter;
