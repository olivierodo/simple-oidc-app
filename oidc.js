const request = require('request')

module.exports = function (uri) {
 return new Promise((resolve, reject) => {
   request({ uri, json: true}, (err, response, body) => {
     if (err) return reject(err)
     resolve(body)
   })
 })
}

