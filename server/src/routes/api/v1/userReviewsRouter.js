import express from 'express';
import objection from 'objection';
import { UserReview } from '../../../models/index.js';

const userReviewsRouter = new express.Router();

userReviewsRouter.get('/', async (req, res) => {
    try {
        const userReviews = await UserReview.query()
        res.status(200).json({ userReviews: userReviews })

    } catch (error) {
        console.error(error);
        
    }
})