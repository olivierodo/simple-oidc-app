module.exports = {
  openidConfiguration: process.env.URL_OPENID,
  client: {
    id: process.env.CLIENT_ID,
    secret: process.env.CLIENT_SECRET,
    callbackUrl: process.env.CLIENT_CALLBACK_URL,
  },
  port: process.env.PORT || 8080
}

