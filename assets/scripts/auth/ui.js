const store = require('../store')

const hideDiv = function (){
  $('#signupDiv').hide()
  $('#pwdiv').hide()
  $('#buttonDiv').hide()
  $('#statDiv').hide()
  $('#gameboard').hide()
}

const clearform = function (){
  $('#sign-up').closest('form').find('input[type=text], textarea').val('')
  $('#sign-up').closest('form').find('input[type=password], textarea').val('')
  $('#sign-in').closest('form').find('input[type=text], textarea').val('')
  $('#sign-in').closest('form').find('input[type=password], textarea').val('')
  $('#change-password').closest('form').find('input[type=password], textarea').val('')
}

const signUpSuccess =function(data){
  $('#message').text('signed up succesfully')
clearform()
}

const signUpFailure =function(data){
  $('#message').text('you failed to sign up ')
clearform()
}

const signInSuccess =function(data){
  store.user=data.user
  $('#message').text('** signed in succesfully **')
  hideDiv()
    $('#buttonDiv').show()
    clearform()
}


const signInFailure =function(data){
  $('#message').text('you failed to sign in ')
  clearform()
}

 const changePasswordSuccess =function(data){
  $('#message').text('** change Password succesfully ** ')
    hideDiv()
      $('#buttonDiv').show()
clearform()
}

const changePasswordFailure  =function(data){
 $('#message').text('you failed to change Password  ')
 clearform()
}
const signOutSuccess =function(data){
 $('#message').text('signOut Success ')
   hideDiv()
     $('#signupDiv').show()

}
const signOutFailure=function(data){
$('#message').text('signOut Failure ')
}

const passDiv = function (){
  $('#message').text('')
     hideDiv()
         $('#buttonDiv').show()
       $('#pwdiv').show()
}

module.exports = {
signUpFailure,
signUpSuccess,
signInSuccess,
signInFailure,
changePasswordSuccess,
changePasswordFailure,
signOutSuccess,
signOutFailure,
passDiv
}
