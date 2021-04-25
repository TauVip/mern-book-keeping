const express = require('express')
const asynHandler = require('express-async-handler')
const authMiddleware = require('../middlewares/authMiddleware')
const usersRoute = express.Router()
const User = require('../models/User')
const generateToken = require('../utils/generateToken')

usersRoute.post(
  '/register',
  asynHandler(async (req, res) => {
    const { name, email, password } = req.body

    const userExist = await User.findOne({ email })
    if (userExist) throw new Error('User Exist')
    const userCreated = await User.create({ email, name, password })
    res.json({
      _id: userCreated._id,
      name: userCreated.name,
      password: userCreated.password,
      email: userCreated.email,
      token: generateToken(userCreated._id)
    })
  })
)

usersRoute.post(
  '/login',
  asynHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await user.isPasswordMatch(password))) {
      res.status(200)

      res.json({
        _id: user._id,
        name: user.name,
        password: user.password,
        email: user.email,
        token: generateToken(user._id)
      })
    } else {
      res.status(401)
      throw new Error('Invalid credentials')
    }
  })
)

usersRoute.put('/update', authMiddleware, (req, res) => {
  res.send('Update Route')
})

usersRoute.delete('/:id', (req, res) => {
  res.send('Delete route')
})

usersRoute.get('/', authMiddleware, (req, res) => {
  res.send(req.user)
})

module.exports = usersRoute
