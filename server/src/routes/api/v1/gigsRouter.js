import  express  from "express";
import objection from "objection";
import { Gig } from "../../../models/index.js";
import GigSerializer from "../../../serializers/GigSerializer.js";

const gigsRouter = new express.Router();

gigsRouter.get("/", async (req, res) => {
    try {
        const gigs = await Gig.query()
        // const serializedGig = GigSerializer.showGigDetails(gigs)
        const serializedGigs = gigs.map(user => GigSerializer.showGigDetails(gigs))
        res.status(200).json({ gigs: serializedGigs })
    } catch (error) {
        console.log(error)
        res.status(500).json({errors: error.message})
    }
})

gigsRouter.post("/", async (req, res) => {
    try {
        const { gigName, description, location, datePosted, gigExpirationDate, duration, compensation, gigCategory } = req.body
        const newGig = await Gig.query().insert({
            gigName, 
            description, 
            location, 
            datePosted, 
            gigExpirationDate, 
            duration, 
            compensation, 
            gigCategory,
        })

        const serializedGig = await GigSerializer.showGigDetails(newGig)
        res.status(201).json({ gig: serializedGig })
    } catch (error) {
        console.log('Error:', error)
        console.log("Error message is", error.message)
        res.status(500).json({ errors: error.message})
    }
})

export default gigsRouter;