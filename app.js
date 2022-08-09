const express = require('express')
const app = express();
const tasks = require('./routes/tasks')
const connectDB=require('./db/connect')
const notFound=require('./middleware/not-found')
require('dotenv').config()


//middleware that is helping us for getting json data
app.use(express.json())
//middleware responsible for providing static data to the browser
app.use(express.static('./public'))


app.use('/api/v1/tasks',tasks)
app.use(notFound)


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

