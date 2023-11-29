import express from 'express';
import objection from 'objection'
import { GigReview } from '../../../models/index.js';
import GigReviewSerializer from '../../../serializers/GigReviewSerializer.js';

const gigReviewsRouter = new express.Router();

gigReviewsRouter.get('/', async (req, res) => {
    try {
        const gigReviews = await GigReview.query()
        // const serializedGigReview = await GigReviewSerializer.showGigReviewDetails(gigReviews)
        const serializedGigReviews = gigReviews.map(gigReview => GigReviewSerializer.showGigReviewDetails(gigReview))
        res.status(200).json({ gigReviews: serializedGigReviews })

    } catch (error) {
        console.error(error);
        res.status(400).json({ errors: error.message });
    }
})

export default gigReviewsRouter;