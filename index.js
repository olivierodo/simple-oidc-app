const express = require('express')
const config = require ('./config')
const OIDC = require('./oidc')(config.openidConfiguration)
const routes = require ('./routes')
const Middlewares = require ('./middlewares')

OIDC
  .then(boot)
  .catch(err => console.log(err))

function boot(oidc) {
  express()
    .set('oidc', oidc)
    .set('config', config)
    .use(Middlewares.render)
    .use(routes)
    .use((err, req, res, next) => res.json({ message : err.message}))
    .listen(config.port,() => {
      console.log(`running on port ${config.port}`)
    })
}

