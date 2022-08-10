const {CustomError} =  require('../errors/custom-error')

const errorHandlerMiddleware = (err,req,res,next)=>{
    if(err instanceof CustomError){
        return res.status(err.statusCode).json({error:err.message})
    }
    return res.status(500).json({error:'there is an error'})
}

module.exports=errorHandlerMiddleware