'use strict'
const {Action, api} = require('actionhero')

module.exports = class MyAction extends Action {
 constructor () {
   super()
   this.name = 'users/list'
   this.description = 'List users'
   this.authenticated = true
   // this.inputs = {
   //    number: {
   //      required: true
   //    }
   //  }
 }

 async run (data) {
   data.response.users = await api.users.list();
 }
}
