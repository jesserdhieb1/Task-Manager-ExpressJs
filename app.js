const express=require('express')
const app=express();

app.get('/',(req,res)=>{
    res.status(200).send('Hello :)')
})
app.listen(3000,()=>{
    console.log('Server connected on port 3000 ...')
})