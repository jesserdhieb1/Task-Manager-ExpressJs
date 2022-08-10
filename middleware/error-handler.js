const errorHandlerMiddleware = (err,req,res,next)=>{
    return res.status(500).json({error:'there is an error'})
}

module.exports=errorHandlerMiddleware