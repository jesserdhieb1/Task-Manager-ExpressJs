const Task = require('../models/task')
const asyncWrapper = require('../middleware/async')
const {createCustomError}=require('../errors/custom-error')


const getAllTasks = asyncWrapper(async (req,res)=>{
        const task = await Task.find({});
        res.status(200).json({task});
})

const createTask = asyncWrapper(async (req,res)=>{
        const task = await Task.create(req.body)
        res.status(201).json({task});
})

const getTask =asyncWrapper( async (req,res,next)=>{
        const {id:task_id}=req.params;
        const task = await Task.findOne({_id:task_id})
        // const task = await Task.findById(task_id)
        if (!task){
            // const error = new Error('Not Found')
            // error.status(404)
            // return next(error)
            return next(createCustomError('please verify your id',404))
            // return res.status(404).json({msg:'please verify your id'})
        }
        res.status(200).json({task})

})

const deleteTask =asyncWrapper( async (req,res,next)=>{
        const {id:task_id}=req.params
        const task = await Task.findOneAndDelete({_id:task_id})
        // const task = await Task.findByIdAndDelete(task_id)
        if (!task){
            // return res.status(404).json({msg:'please verify your id'})
            return next(createCustomError('please verify your id',404))
        }
        res.status(200).json({task})
})

const updateTask =asyncWrapper( async (req,res,next)=>{
        const {id:task_id}  = req.params
        const task  = await Task.findOneAndUpdate({_id:task_id},req.body,{new:true,runValidators:true})
        // const task  = await Task.findByIdAndUpdate(task_id,req.body,{new:true,runValidators:true})
        if (!task){
            // return res.status(404).json({msg:'please verify your id'})
            return next(createCustomError('please verify your id',404))
        }
        res.status(200).json({task})
})

module.exports={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}