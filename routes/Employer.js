const express = require('express')

const { addEmployer, getEmployers, getOneEmployers, deleteEmployer, updateEmployer } = require('../controllers/Employer')

const EmployerRouter = express.Router()

EmployerRouter.post('/addEmployer',addEmployer)

EmployerRouter.get('/getEmployers',getEmployers)
EmployerRouter.get('/getOneEmployer/:id',getOneEmployers)

EmployerRouter.delete("/deleteEmployer/:id",deleteEmployer)
EmployerRouter.put('/updateEmployer/:id',updateEmployer)




module.exports = EmployerRouter