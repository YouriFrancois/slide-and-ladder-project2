'use strict'

let apiUrl
const apiUrls = {
  production:'https://rhubarb-cake-91816.herokuapp.com',
  development:'http://localhost:4741'
  //development: 'https://rhubarb-cake-91816.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
