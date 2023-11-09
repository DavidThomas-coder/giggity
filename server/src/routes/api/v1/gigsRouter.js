import  express  from "express";
import objection from "objection";
import { Gig } from "../../../models/index.js";
import GigSerializer from "../../../serializers/GigSerializer.js";

const gigsRouter = new express.Router();

gigsRouter.get("/", async (req, res) => {
    try {
        const gigs = await Gig.query()
        const serializedGig = await GigSerializer.showGigDetails(gigs)
        res.status(200).json({ gigs: serializedGig })
    } catch (error) {
        console.log(error)
        res.status(500).json({errors: error.message})
    }
})

gigsRouter.post("/", async (req, res) => {
    try {
        const 
    } catch (error) {
        console.log('Error:', error)
        res.status(500).json({ errors: error.message})
    }
})

export default gigsRouter;