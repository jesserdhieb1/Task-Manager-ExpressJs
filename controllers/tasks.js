const Task = require('../models/task')

const getAllTasks = async (req,res)=>{
    try {
        const task = await Task.get({});
        res.status(200).send('get all tasks :)');
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


const getTask = (req,res)=>{
    res.status(200).json({id:req.params.id});
}

const updateTask = (req,res)=>{
    res.status(200).send('update a task :)');
}

const deleteTask = (req,res)=>{
    res.status(200).send('delete a task :)');
}

module.exports={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}