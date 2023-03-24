const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')

const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')



const app = express()
dotenv.config();

const PORT = process.env.PORT|| 8800


//connection to database
mongoose.connect(process.env.MONGO_URL,)
        .then(console.log('connected to database successfully'))
        .catch(err => console.log(err))

//middleware
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)


app.listen(PORT, () =>{
    console.log(`server running on port ${PORT} `)
})
