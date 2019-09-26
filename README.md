# Simple Open Id Connect tester

> This project is just a simple app to help the developer to test an open id connect endpoint.

The application shouldn't  be deployed, it's just for local development purposes.

## Getting start


``` #node.js #express.js ```

## Getting Started :metal:

### Dependencies

  * openid connect configuration : url
  * openid connect configuration : client id
  * openid connect configuration : client secret 

### Setup :computer:

  * Set your environment variables ```cp .env.sample .env``` then edit your `.env` file.
  * Install dependencies using ``` npm install ``` or ``` yarn ```.
  * Add the redirect url to open id connect identity provider : {{host}}/callback

### Environment variable

You can edit the environment variable on the file `.env.`

  * `CLIENT_ID` : the client id shared by the identiy provider
  * `CLIENT_SECRET` : the client secret shared by the identiy provider
  * `URL_OPENID` : the public oidc url configuration
  * `RENDER_TYPE` : Define the render for the first page : html or json (default: json)

If you want to test a simple oauth2 endpoint, you will need to create a local config and share it in the `URL_OPENID` env var

Example with github.com

```
## config.json
{
  "authorization_endpoint": "https://github.com/login/oauth/authorize",
  "token_endpoint": "https://github.com/login/oauth/access_token"
}

```

Then on the `.env` file you need to add :

```
## .env

URL_OPENID=./config.json
```

### Run :running:


  start project
  ```
  npm run start:dev
  ```

### Example of public OIDC configuration

* Google : https://accounts.google.com/.well-known/openid-configuration
* Salesforce : https://login.salesforce.com/.well-known/openid-configuration
* Microsoft: https://login.windows.net/common/.well-known/openid-configuration
