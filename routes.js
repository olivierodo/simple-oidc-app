const Router = require('express').Router()
const Controllers = require('./controllers')

module.exports = Router
  .get('/', Controllers.index)
  .get('/callback', Controllers.callback)
  .get('/logout', Controllers.logout)
