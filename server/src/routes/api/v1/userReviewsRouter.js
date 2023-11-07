import express from 'express';
import objection from 'objection';
import { UserReview } from '../../../models/index.js';
import UserReviewSerializer from '../../../serializers/UserReviewSerializer.js';

const userReviewsRouter = new express.Router();

userReviewsRouter.get('/', async (req, res) => {
    try {
        const userReviews = await UserReview.query()
        const serializedUserReview = await UserReviewSerializer.showUserReviewDetails(userReviews)
        res.status(200).json({ userReviews: userReviews })

    } catch (error) {
        console.error(error);
        res.status(400).json({ errors: error.message });
    }
})

export default userReviewsRouter;