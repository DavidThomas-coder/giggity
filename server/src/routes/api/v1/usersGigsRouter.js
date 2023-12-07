import express from 'express';
import GigSerializer from '../../../serializers/GigSerializer.js'
import { Gig, User } from "../../../models/index.js"

const usersGigsRouter = new express.Router();

usersGigsRouter.get("/:id/gigs", async (req, res) => {
    const { id } = req.params

    try {
        //find gigs where the owner matches the user's id
        const ownedGigs = await Gig.query().where('ownerId', id)

        const serializedOwnedGigs = ownedGigs.map((gig) => 
            GigSerializer.showGigDetails(gig, req.user))
        
        return res.status(200).json({
            ownedGigs: serializedOwnedGigs
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message })
    }
})

export default usersGigsRouter