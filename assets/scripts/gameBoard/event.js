const ui = require("./ui")
const luck = require("./luck")
const api = require('./api')

let isx =24
let iso =24
let temp =0
let turn =true



const move1 = function (event) {

if(isx-1===iso || isx===iso-1 ){  $('#message').text('try again')}
else {
  if(turn){

const wasx = isx
console.log(isx)
temp =isx-1
isx = luck.check(temp)
console.log(isx)
ui.moveX(isx,wasx)
turn=false
api.updateGame(sendData(isx,iso,false,'x'))
}else{
  const waso= iso
  iso--
  ui.moveO(iso,waso)
turn=true
  api.updateGame(sendData(isx,iso,false,'o'))
}
}

}



const move2 = function (event) {

  if(isx-2===iso || isx===iso-2 ){  $('#message').text('try again')}
  else {
    if(turn){

  const wasx = isx
  isx-=2
  ui.moveX(isx,wasx)
  turn=false
 api.updateGame(sendData(isx,iso,false,'x'))
  }else{
    const waso= iso
    iso-=2
    ui.moveO(iso,waso)
  turn=true
 api.updateGame(sendData(isx,iso,false,'o'))
  }
  }

}


const move3 = function (event) {

  if(isx-3===iso || isx===iso-3 ){  $('#message').text('try again')}
  else {
    if(turn){

  const wasx = isx
  isx-=3
  ui.moveX(isx,wasx)
  turn=false
     api.updateGame(sendData(isx,iso,false,'x'))
  }else{
    const waso= iso
    iso-=3
    ui.moveO(iso,waso)
  turn=true
   api.updateGame(sendData(isx,iso,false,'o'))
  }
  }

}
// =========================== api ==========
const onshowGame = function(){
  api.showGame()
  .then(ui.showstatus)
.catch(ui.showstatusFail)
}
const sendData = function( x,o,over,turn){
return {
  "game": {
    "Xis": x,
    "Ois": o,
    "over":over,
    "turn": turn
    }
  }
}


const onnewgame = function(){
 isx =24
iso =24
 temp =0
 turn =true
  ui.newGame(isx)
 api.createGame(sendData(isx,iso,false,'x'))
 .then(ui.newGameSuccess)
 .catch(ui.newGameFail)


}

const ondelete = function (event){
  const id = $(event.target).data('id')
  api.removeGame(id)
  .then(function () {
onshowGame()
  })
  .catch(ui.deleteFail)
   onshowGame()
}

module.exports = {
  move1,
  move2,
  move3,
  onshowGame,
  onnewgame,
  ondelete
}
