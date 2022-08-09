const express = require('express')
const app = express();
const tasks = require('./routes/tasks')
const connectDB=require('./db/connect')
require('dotenv').config()


//middleware that is helping us for getting json data
app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).send('Hello :)')
})

app.use('/api/v1/tasks',tasks)


const port = 3000

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log(`Server connected on port ${port} ...`)
        })
    }
    catch (error){
        console.log(error)
    }
}

start();

