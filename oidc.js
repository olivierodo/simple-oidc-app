const request = require('request')
const url = require('url');

module.exports = function (uri) {
 return new Promise((resolve, reject) => {
   try { 
     new URL(uri);
     request({ uri, json: true}, (err, response, body) => {
       console.log(uri)
       if (err) return reject(err)
       resolve(body)
     })
   } catch (err) {
     resolve(require(uri))
   }
 })
}

