const mongoose = require('mongoose')
const taskSchema  = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true,'name not available please check yourself'],
        maxLength:[20,'respect the lenght wich is 20']
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports=mongoose.model('Task',taskSchema)

