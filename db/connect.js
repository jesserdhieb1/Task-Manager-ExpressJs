const mongoose  = require('mongoose')

const connectionString = `mongodb+srv://admin:admin@nodeexpressprojects.w5y4eka.mongodb.net/TASK-MANAGER?
                          retryWrites=true&w=majority`;

mongoose.connect(connectionString)
        .then(()=>{console.log('CONNECTED TO THE DB ...')})
        .catch((err)=>{console.log(err)})