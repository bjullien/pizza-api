'use strict'
const Api = require('claudia-api-builder')
const api = new Api()
const getPizzas = require('./handlers/get-pizzas')
const createOrder = require('./handlers/create-order')

api.get('/pizzas', () => {
  return getPizzas()
})

api.get(
  '/pizzas/{id}',
  request => {
    return getPizzas(request.pathParams.id)
  },
  {
    error: 404,
  }
)

/**
 * api.post(path, handler, options)
 */
api.post(
  '/orders',
  request => {
    return createOrder(request.body)
  },
  {
    success: 201, //returns 201 Created
    error: 400, //returns 400 Bad Request
  }
)

module.exports = api

// '/pizzas/{id}' is '/pizzas/:id' in Express.js
