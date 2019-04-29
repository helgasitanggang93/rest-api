require('dotenv').config()
const express = require('express')
const app =  express()
const port = 3000
const todosRouter = require('./routes/todosRoutes')
const signUpRouter = require('./routes/employeeRoutes')
const loginRouter = require('./routes/loginRoutes')
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use('/todos', todosRouter)
app.use('/signUp', signUpRouter)
app.use('/login', loginRouter)
app.listen(port, function () {
    console.log(`listening port ${port}`)
    
})

