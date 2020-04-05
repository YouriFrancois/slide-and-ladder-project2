'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const playEvents = require('./gameBoard/event')
const authEvents= require('./auth/event')
//
const hideDiv = function() {
  $('#signupDiv').hide()
  $('#pwdiv').hide()
  $('#buttonDiv').hide()
  $('#statDiv').hide()
  $('#gameboard').hide()
}

$(() => {
hideDiv()
  $('#signupDiv').show()
  // your JS code goes here
    $("#forward-1").on('click',playEvents.move1)
    $("#forward-2").on('click',playEvents.move2)
    $("#forward-3").on('click',playEvents.move3)
    $("#view-game").on('click',playEvents.onshowGame)
    $("#new-game").on('click',playEvents.onnewgame)
    $('.content').on('click', '.btn-ondelete', playEvents.ondelete)
    $('.content').on('click', '.oncontinue', playEvents.onContinue)

//---------
$("#sign-up").on('submit',authEvents.onSignUp)
$("#sign-in").on('submit',authEvents.onSignIn)
$("#change-password").on('submit',authEvents.onChangePassword)
$("#log-out").on('click',authEvents.onSignOut)
$("#changepwd").on('click',authEvents.onshowpass)


})
