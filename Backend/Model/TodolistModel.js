import mongoose from "mongoose";
const TodoSchema = mongoose.Schema({
    item : {
        type : String,
        required : true
    }
    
})
export default  mongoose.model('tododata',TodoSchema)