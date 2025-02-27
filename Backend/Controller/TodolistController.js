import TodolistModel from "../Model/TodolistModel.js";
//create a table

export const adddata = async (req,res)=>{
    try{
        const userdata =  new TodolistModel(req.body);
        const savedata = await userdata.save();
        res.json(savedata);
    }
    catch(error){
        res.json(error)
    }
}


//get Data
export const getd = async(req,res)=>{
    try {
        const getdatas = await TodolistModel.find()
        res.json(getdatas)
    } catch (error) {
        res.json(error)
    }
}

//delete a data

export const deletedata = async (req,res)=>
{
    try{
         await TodolistModel.findByIdAndDelete(req.params.id)
                            
        res.json("USer Deleted");
    }
    catch(error){
        res.json(error)
    }
}