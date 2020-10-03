const mongoose = require('mongoose')
module.exports = () => {

   mongoose.connect( process.env.MONGO_URI, {
       dbName: process.env.DB_NAME,
       user: process.env.DB_USER,
       pass: process.env.DB_PASS,
       useNewUrlParser: true,
       useUnifiedTopology: true,    
       useFindAndModify: false,
       useCreateIndex: true
   })

   .then(() => {
       console.log('mongoDB is connected...')
   })
   .catch(err => console.log(err.message))
   mongoose.connection.on('error', error => console.log())
   mongoose.connection.once('open', () => console.log('connected to mongoose'))
   
}