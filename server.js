const express = require('express')
const ConnectDB = require('./config/ConnectDB')
const userRouter = require('./routes/User')
const EmployeeRouter = require('./routes/Employee')
const EmployerRouter = require('./routes/Employer')
const userPostRouter = require('./routes/UserPost')
const demandeRouter = require('./routes/Demande')
const AnnoncesRouter = require('./routes/Annonces')


const app = express()

require('dotenv').config()

ConnectDB()

app.use(express.json())


app.use('/api/auth', userRouter)
app.use('/api/Employee',EmployeeRouter)
app.use('/api/Employer',EmployerRouter)
app.use('/api/UserPost',userPostRouter)
app.use('/api/Demande',demandeRouter)
app.use('/api/Annonces',AnnoncesRouter)









app.listen(process.env.port, console.log(`server is running on port ${process.env.port}`))