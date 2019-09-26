module.exports = {
  render: {
    type: process.env.RENDER_TYPE || 'json' // Define the type of render you need for the first page "json provide more detail
  },
  openidConfiguration: process.env.URL_OPENID, // Link of the open id connect remote config
  client: {
    id: process.env.CLIENT_ID, // Client id created in the oidc provider
    secret: process.env.CLIENT_SECRET //Client secret shared by the oidc provider
  },
  port: process.env.PORT || 8080 // running port 
}
