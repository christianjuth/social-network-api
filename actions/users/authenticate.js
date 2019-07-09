'use strict'
const {Action, api} = require('actionhero')

module.exports = class MyAction extends Action {
 constructor () {
   super()
   this.name = 'users/authenticate'
   this.description = 'authenticate user'
   this.inputs = {
      userName: {
        required: true
      },
      password: {
        required: false
      },
      token: {
        required: false
      }
    }
 }

 async run (data) {
   let {token, userName, password} = data.params;
   try{
     data.response.token = (await api.users.authenticate(userName, token, password)).token;
   } catch(e) {
     data.response.error = e;
   }
 }
}
