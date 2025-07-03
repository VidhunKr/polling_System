import express from "express"
import { createPoll, getPoll, Vote } from "./pollController.js"
const mainRouter = express.Router()

mainRouter.post("/create",createPoll)
mainRouter.get("/get",getPoll)
mainRouter.patch("/:id/vote/:index",Vote)

export default mainRouter