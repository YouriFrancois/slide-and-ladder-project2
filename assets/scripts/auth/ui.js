const store = require('../store')

const signUpSuccess =function(data){
  $('#message').text('signed up succesfully')
}

const signUpFailure =function(data){
  $('#message').text('you failed to sign up ')
}

const signInSuccess =function(data){
  store.user=data.user
  console.log( "this is token "+store.user.token)
  $('#message').text('** signed in succesfully **')
}


const signInFailure =function(data){
  $('#message').text('you failed to sign in ')
}

 const changePasswordSuccess =function(data){
  $('#message').text('** change Password succesfully ** ')
}

const changePasswordFailure  =function(data){
 $('#message').text('you failed to change Password  ')
}
const signOutSuccess =function(data){
 $('#message').text('signOut Success ')
}
const signOutFailure=function(data){
$('#message').text('signOut Failure ')
}


module.exports = {
signUpFailure,
signUpSuccess,
signInSuccess,
signInFailure,
changePasswordSuccess,
changePasswordFailure,
signOutSuccess,
signOutFailure
}
