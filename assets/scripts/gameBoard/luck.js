const ui = require("./ui")


const check = function(is, pl2) {

  if (is === 22 && pl2 !== 19) {
    ui.goodmove()
    return 19
  } else if (is === 20 && pl2 !== 17) {
    ui.goodmove()
    return 17

  } else if (is === 12 && pl2 !== 9) {
    ui.goodmove()
    return 9

  } else if (is === 14 && pl2 !== 10) {
    ui.goodmove()
    return 10

  }
  //    =========================
  else if (is === 13 && pl2 !== 21) {
    ui.badmove()
    return 21
  } else if (is === 11 && pl2 !== 18) {
    ui.badmove()
    return 18
  } else if (is === 2 && pl2 !== 14) {
    ui.badmove()
    return 14
  }
  //    =========================
  else if (is < 0) {
    return 0
  } else {
    return is
  }

}

module.exports = {
  check
}
