const config = require('./config')

function render(req, res, next) {
  res.render = function(data) {
    if ('json' === config.render.type) {
      return res.json(data)
    }

    let result = ''
    result += Object.keys(data.href)
      .reduce((r,item,index, list) => {
        r += `<h3><a href="${data.href[item]}">${item}</a>` 
        return r + '<br />'
      }, result)

    res.send(result)
  }
  next()
}

module.exports = {
  render
}
