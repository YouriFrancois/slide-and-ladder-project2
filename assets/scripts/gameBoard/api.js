const config = require('../config')
const store = require('../store')


const showGame = function () {
  return $.ajax({
    url: config.apiUrl +'/games' ,
    method: 'GET',
    headers:{
      Authorization:'Token token='+store.user.token
    },
     data: '',
  })
}

const createGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers:{
      Authorization:'Token token='+store.user.token
    },
    data
  })
}

const updateGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/'+store.game.id,
    method: 'PATCH',
    headers:{
      Authorization:'Token token='+store.user.token
    },
    data
  })
}

const removeGame = function (id) {
  return $.ajax({
      url: config.apiUrl + '/games/' + id,
      method: 'DELETE',
      headers: {
        Authorization: 'Token token=' + store.user.token
      },
    })
}


module.exports = {
  showGame,
  createGame,
  updateGame,
  removeGame,
}
