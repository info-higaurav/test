import {Request, Response, Router} from 'express'

const adminRoutes = Router()

adminRoutes.get('/',(req:Request , res:Response)=>{
    res.status(200).json({message:"Working fine admin routes"})
})

export default adminRoutes;