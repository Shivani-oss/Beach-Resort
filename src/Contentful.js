const contentful = require('contentful')
require('dotenv').config()


const client = contentful.createClient({
    space: process.env.REACT_APP_API_SPACE ,
    accessToken: process.env.REACT_APP_ACESS_TOKEN
  })
  

export default client


