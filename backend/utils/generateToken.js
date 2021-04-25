const jwt = require('jsonwebtoken')

const generateToken = userId =>
  jwt.sign({ id: userId }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' })

module.exports = generateToken
