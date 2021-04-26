const express = require('express')
const app = express()
const dotenv = require('dotenv')
const usersRoute = require('./routes/usersRoute')
const error = require('./middlewares/errorMiddlewareHandler')
const bookRouter = require('./routes/bookRoutes')

dotenv.config()
require('./config/dbConnect')()

app.use(express.json())

app.use('/api/users', usersRoute)
app.use('/api/books', bookRouter)
app.use(error.errorMiddlewareHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is up and running ${PORT}`))

// MERN Stack Book keeping App: #33 Logout user using redux | 3:16
