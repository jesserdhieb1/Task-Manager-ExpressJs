const Task = require('../models/task')

const getAllTasks = async (req,res)=>{
    try {
        const task = await Task.find({});
        res.status(200).send({task});
    }
    catch (error){
        res.status(500).json({msg:error})
    }
}

const createTask = async (req,res)=>{
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task});
    }
    catch (error){
        res.status(500).json({msg:error})
    }
}

const getTask = async (req,res)=>{
    try{
        const {id:task_id}=req.params;
        const task = await Task.findOne({_id:task_id})
        if (!task){
            return res.status(404).json({msg:'please verify your id'})
        }
        res.status(200).json({task})
    }
    catch (error){
        res.status(500).json({msg:error})
    }
}

const deleteTask = async (req,res)=>{
    try{
        const {id:task_id}=req.params
        const task = await Task.findOneAndDelete({_id:task_id})
        // const task = await Task.findByIdAndDelete(task_id)
        if (!task){
            return res.status(404).json({msg:'please verify your id'})
        }
        res.status(200).json({task})
    }
    catch (error){
        res.status(500).json({msg:error})
    }
}

const updateTask = (req,res)=>{
    res.status(200).send('update a task :)');
}

module.exports={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}