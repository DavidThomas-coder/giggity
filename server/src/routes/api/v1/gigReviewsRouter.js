import express from 'express';
import objection from 'objection'
import { GigReview } from '../../../models/index.js';

const gigReviewsRouter = new express.Router();

gigReviewsRouter.get('/', async (req, res) => {
    try {
        const gigReviews = await GigReview.query()
        res.status(200).json({ gigReviews: gigReviews })

    } catch (error) {
        console.error(error);
        res.status(400).json({ errors: error.message });
    }
})

export default gigReviewsRouter;