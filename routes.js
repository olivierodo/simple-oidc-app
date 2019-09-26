const Router = require('express').Router()
const Controllers = require('./controllers')
const Middlewares = require('./middlewares')

module.exports = Router
  .get('/', Controllers.index)
  .get('/callback', Controllers.callback)
  .get('/logout', Controllers.logout)
