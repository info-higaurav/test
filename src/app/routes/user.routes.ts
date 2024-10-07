import express, { Request, Response } from 'express'

const userRoutes = express.Router()

userRoutes.get('/',(req:Request, res:Response)=>{
    res.status(200).json({message:"User Routes working fine"})
})
export default userRoutes;