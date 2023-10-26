import  express  from "express";
import objection from "objection";
import { Gig } from "../../../models/index.js";

const gigsRouter = new express.Router();

gigsRouter.get("/", async (req, res) => {
    try {
        const gigs = await Gig.query()
        res.status(200).json(gigs)
    } catch (error) {
        console.log(error)
        res.status(500).json({errors: error.message})
    }
})