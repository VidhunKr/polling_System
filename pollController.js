import { pollModel } from "./pollModel.js"

export const createPoll = async (req,res)=>{
    const {question, options}=req.body
    const votes =Array(options.length).fill(0)
    const poll = new pollModel({question,options,votes})
    await poll.save()
    res.status(200).json(poll)
}

export const getPoll =async(req,res)=>{
    const polls =await pollModel.find().sort({createdAt:-1})
    res.json(polls)
}

export const Vote = async(req,res)=>{
    const {id, index}=req.params
    const poll =await pollModel.findById(id)
    if(!poll) return res.status(404).json({error:"poll not Found"})
        poll.votes[index]++
    await poll.save()
    res.json(poll)
}