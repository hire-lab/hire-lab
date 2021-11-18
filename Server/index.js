const express = require('express')
const dbConfig = require('./config/database')
const {PORT} = require('./config/index')
const cors = require('./middlewares/cors')
const storage = require('./middlewares/storage')
const auth = require('./middlewares/auth')
const userController = require('./controllers/userController') 
const jobsController = require('./controllers/jobsController') 

start()

async function start(){

    const app = express()

    await dbConfig(app)
    
    app.use(cors())
    app.use(auth())
    app.use(storage())
    app.use(express.json())

    app.use('/users', userController)
    app.use('/data/catalog', jobsController)

    app.listen(PORT, () => console.log(`REST Service is running on port ${PORT}`))
}