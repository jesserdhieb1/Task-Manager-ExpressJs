const express = require('express')
const app = express();
const routes = require('./routes/tasks')


app.get('/',(req,res)=>{
    res.status(200).send('Hello :)')
})

app.use('/api/v1/tasks',routes)


const port = 3000
app.listen(port,()=>{
    console.log(`Server connected on port ${port} ...`)
})