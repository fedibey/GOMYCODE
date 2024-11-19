const express = require('express')
const { addEmployee, getEmployees, getOneEmployee, deleteEmployee, updateEmployee } = require('../controllers/Employee')

const EmployeeRouter = express.Router()

EmployeeRouter.post('/addEmployee',addEmployee)

EmployeeRouter.get('/getEmployees',getEmployees)

EmployeeRouter.get('/getOneContact/:id',getOneEmployee)

EmployeeRouter.delete('/deleteEmployee/:id',deleteEmployee)

EmployeeRouter.put('/updateEmployee/:id',updateEmployee)
     
module.exports= EmployeeRouter