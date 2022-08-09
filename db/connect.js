const mongoose  = require('mongoose')

const connectDB=(url)=>{
    console.log('CONNECTED TO MONGOATLAS CLUSTER ...')
    mongoose.connect(url);
}

module.exports=connectDB


