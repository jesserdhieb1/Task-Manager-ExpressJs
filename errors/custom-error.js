
class CustomError extends Error{
    constructor(message,StatusCode) {
        super(message);
        this.statusCode=StatusCode;
    }
}

const createCustomError= (msg,statusCode)=>{
    return new CustomError(msg,statusCode)
}

module.exports={CustomError,createCustomError}