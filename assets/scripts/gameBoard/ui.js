const config = require('../config')
const store = require('../store')
const showgamesTemplate = require('../templates/game-listening.handlebars')

//
const hideDiv = function() {
  $('#signupDiv').hide()
  $('#pwdiv').hide()
  $('#buttonDiv').hide()
  $('#statDiv').hide()
  $('#gameboard').hide()
}




const moveX = function(isx, wasX) {

  $('#' + wasX).removeClass()
  $("#" + wasX).addClass("col-3 box ")
  $('#' + wasX).html('')
  $("#" + isx).addClass('col-3 box Xtil')
  $('#' + isx).html('<h2>X</h2>')
    $('#gamemesage').html('<h2> player 2(O) turn </h2>')
}
const moveO = function(isx, wasX) {

  $('#' + wasX).removeClass()
  $("#" + wasX).addClass("col-3 box ")
  $('#' + wasX).html('')
  $("#" + isx).addClass('col-3 box Otil')
  $('#' + isx).html('<h2>O</h2>')
    $('#gamemesage').html('<h2> player 1(X)  turn </h2>')
}
const goodmove = function() {
$('#gamemesage2').html('<h2>ladder up </h2>')
}
const badmove = function() {
$('#gamemesage2').html('<h2> slide down </h2>')
}
//================ api part ========================================
const showstatus = function(data) {
  hideDiv()
  $('#statDiv').show()
  $('#buttonDiv').show()
$('#message').html('<h2> all saved games  </h2>')
$('#message').removeClass()
$('#message').addClass('goodmesage')
  const showGameHtml = showgamesTemplate({
    games: data.games
  })
  $('#show-game').html(showGameHtml)

}

const newGame = function(num) {
  hideDiv()
  $('#gameboard').show()
  $('#buttonDiv').show()
  for (let i = 0; i < num; i++) {
    $('#' + i).removeClass()
    $("#" + i).addClass("col-3 box ")
    $('#' + i).html('')
  }
  $('#0').removeClass()
  $("#0").addClass("col-3 box wintile ")
  $('#0').html('finish ')

  $('#23').removeClass()
  $("#23").addClass("col-3 box  ")
  $('#23').html('start ')
    $('#gamemesage').html('<h2> player 1(X) turn </h2>')
}


const newGameSuccess = function(data) {
  $('#message').html("<h2> new game succesful </h2>")
  store.game = data.game
}

const deleteSuccess = function(data) {
  $('#message').html("new delete")
}

const deleteFail = function (){
    $('#message').html('<h2> could not delete this game  </h2>')
}

const showsupdate = function(data){
    $('#message').html('<h2> player'+data+ 'turn </h2>')
}
const badupdate = function (){
  hideDiv()
  $('#statDiv').show()
  $('#buttonDiv').show()
  $('#message').html('<h2> could not update this game  </h2>')
}

module.exports = {
  moveX,
  moveO,
  showstatus,
  newGame,
  newGameSuccess,
  deleteSuccess,
  goodmove,
  badmove,
  showsupdate,
  deleteFail,
  badupdate
}
