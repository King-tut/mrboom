import User from "../models/User.js";


export const getUser = async (req, res)=>{
    try{
        console.log(req.body)
        const {id} = req.params;
        const user = await User.findById(id);
        console.log(user)
        res.status(200).json(user)

    } catch(error){
        res.status(404).json({message: error.message})
    }

}