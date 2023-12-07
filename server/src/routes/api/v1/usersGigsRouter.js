import express from 'express';
import GigSerializer from '../../../serializers/GigSerializer'
import { Gig, User } from "../../../models/index.js"

const usersGigsRouter = new express.Router


