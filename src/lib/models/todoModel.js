import mongoose from "mongoose";

const todo= mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    des:{
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    }
},{
    timeStamp:true
})

const TodoModel=mongoose.models.todo || mongoose.model('todo',todo)

export default TodoModel