'use strict'
const {Action, api} = require('actionhero')

module.exports = class MyAction extends Action {
 constructor () {
   super()
   this.name = 'squreNumber'
   this.description = 'I am an API method which will generate a random number'
   this.authenticated = true
   this.inputs = {
      number: {
        required: true
      }
    }
 }

 async run (data) {
   data.response.randomNumber = data.params.number**2
 }
}
