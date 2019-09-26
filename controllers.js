const request = require('request')
const querystring = require('querystring');

function index(req, res) {

  let { config, oidc } = req.app.settings

  if (!config.client.id || !config.client.secret) {
    throw new Error('Please provide the client id and the client secret')
  }

  let host = `${req.protocol}://${req.get('host')}`
  let redirectUrl = `${host}/callback`

  let params = querystring.stringify({
    'client_id': config.client.id,
    'response_type': 'code',
    'redirect_uri':  redirectUrl
  })

  let login = `${oidc.authorization_endpoint}?${params}`

  res.render({
     href: {
       login,
       redirectUrl,
       logout: `${host}/logout`
     },
     info: {
       oidc : config.openidConfiguration
     }
  })
}

function callback(req, res, next) {
  let { config, oidc } = req.app.settings
  let { code, error, error_description } =  req.query

  if (error) {
    throw new Error( `${error} - ${error_description }`)
  }

  let host = `${req.protocol}://${req.get('host')}`
  let redirectUrl = `${host}/callback`

  let options = {
    url:  oidc.token_endpoint,
    method: 'POST',
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    form: {
      code,
      'client_id': config.client.id,
      'client_secret': config.client.secret,
      'grant_type': 'authorization_code',
      'redirect_uri': redirectUrl
    },
    json: true
  }
  
  request(options, (err, response, body) => {
    if (err) return next(err)

    let result = {
      href: {
        index: host
//        logout: `${req.protocol}://${req.get('host')}/logout`
      }
    }
    result.info = {
      token: body
    }
    
    let options = {
      url:  oidc.userinfo_endpoint,
      method: 'GET',
      headers: {
        authorization: `Bearer ${body.access_token}`
      },
      json: true
    }

    request(options, (err, response, body) => {
      result.info.user = body 
      res.json(result)
    })
  })
}

function logout(req, res) {
  let { config, oidc } = req.app.settings
}

module.exports = {
  index,
  callback,
  logout
}
