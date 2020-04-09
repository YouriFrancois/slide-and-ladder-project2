const ui = require("./ui")
const luck = require("./luck")
const api = require('./api')
const store = require('../store')

let isx = 24
let iso = 24
let temp = 0
let turn = true
let play = true

const move1 = function(event) {
  move(1)
}
const move2 = function(event) {
  move(2)
}
const move3 = function(event) {
  move(3)
}

const move = function(jump) {
  if (play) {
    if (isx - jump === iso || isx === iso - jump) {
      $('#gamemesage').html('<h2> try again the other player is on the spot </h2>')
    } else {
      if (turn) {
        const wasx = isx
        temp = isx - jump
        isx = luck.check(temp, iso)
        ui.moveX(isx, wasx)
        turn = false
        if (isx <= 0 || iso <= 0) {
          ui.showsupdate('player  1 x');
          play = false
        }
        api.updateGame(sendData(isx, iso, !play, 'O'))
        .catch(ui.badupdate)

      } else {

        const waso = iso
        temp = iso - jump
        iso = luck.check(temp, isx)
        if (isx <= 0 || iso <= 0) {
          ui.showsupdate('player 2 O');
          play = false
        }
        ui.moveO(iso, waso)
        turn = true
        api.updateGame(sendData(isx, iso, !play, 'X'))
  .catch(ui.badupdate)
      }
    }
  } else {
    $('#gamemesage').html('<h2> game is over </h2>')
  }
}
// =========================== api ==========
const onshowGame = function() {
  api.showGame()
    .then(ui.showstatus)
    .catch(ui.showstatusFail)
}
const sendData = function(x, o, over, turn) {
  return {
    "game": {
      "Xis": x,
      "Ois": o,
      "over": over,
      "turn": turn
    }
  }
}


const onnewgame = function() {
  isx = 24
  iso = 24
  temp = 0
  turn = true
  play = true
  ui.newGame(isx)
  api.createGame(sendData(isx, iso, false, 'x'))
    .then(ui.newGameSuccess)
    .catch(ui.newGameFail)


}

const ondelete = function(event) {
  onshowGame()
  const id = $(event.target).data('id')
  api.removeGame(id)
    .then(function() {
      onshowGame()
    })
    .catch(ui.deleteFail)

}


const onContinue = function() {
  let over = $(event.target).data('over')
  let id = $(event.target).data('id')
  iso = $(event.target).data('ois')
  isx = $(event.target).data('xis')
  let turnx = $(event.target).data('turn')
   if (turnx === 'X') {
    turn = true;
  } else {
   turn = false;
   }
play = !over
  store.game = {
    id
  }
  //
  ui.newGame(24)
  api.updateGame(sendData(isx, iso, !play, turnx))
    .catch(ui.badupdate)
  ui.moveX(isx, isx)
  ui.moveO(iso, iso)
}

module.exports = {
  move1,
  move2,
  move3,
  onshowGame,
  onnewgame,
  ondelete,
  onContinue
}
