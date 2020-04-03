const config = require('../config')
const store = require('../store')
const showgamesTemplate = require('../templates/game-listening.handlebars')

//


const moveX = function (isx,wasX){
  $('#'+wasX ).removeClass()
  $("#"+wasX).addClass("col-3 box ")
  $('#'+wasX ).html('')
  $("#"+isx).addClass('col-3 box Xtil')
  $('#'+isx ).html('<h2>X</h2>')
}
const moveO = function (isx,wasX){
  $('#'+wasX ).removeClass()
  $("#"+wasX).addClass("col-3 box ")
  $('#'+wasX ).html('')
  $("#"+isx).addClass('col-3 box Otil')
  $('#'+isx ).html('<h2>O</h2>')
}
//================ api part ========================================
const showstatus = function(data){

const showGameHtml = showgamesTemplate({ games: data.games })
$('#show-game').html(showGameHtml)

}

const newGame = function(num){
  for(let i =0 ;i< num; i++){
  $('#'+i ).removeClass()
  $("#"+i).addClass("col-3 box")
    $('#'+i).html('')
}
}


const newGameSuccess = function(data){
  $('#message').html("new game succesfully")
  store.game = data.game
  console.log("this is "+data.game.id)
}

const deleteSuccess = function(data){
  $('#message').html("new delete")
}
module.exports = {
  moveX,
  moveO,
  showstatus,
newGame,
newGameSuccess,
deleteSuccess
}
