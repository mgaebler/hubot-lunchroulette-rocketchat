const LR = require('drawer')
const phrases = require('../phrases')




module.exports = (robot) => {

  // new user joins Lunch Roulette Channel
  robot.enter (res => {
    res.send (res.random (phrases.enter_channel))
  })

  // user leaves Lunch Roulette Channel
  robot.leave (res => {
    res.send (res.random (phrases.leave_channel))
  })

  // help
  robot.hear(/help/i, res => {
    res.send (res.random (phrases.help))
  })

  // status
  robot.respond(/status|wie siehts aus/i, res => {
    res.send (res.random (phrases.status))
  })

  // reminder
  robot.respond(/reminder/i, res => {
    res.send (res.random (phrases.reminder))
  })

  // roulette
  robot.respond(/roulette/i, res => {

    lr = new LR(3, 0.5)

    lr.on('addPlayer', user => {
      res.send(res.random(user, phrases.join))
    })

    lr.on('remPlayer', user => res.send(res.random(phrases.leave)))

    lr.on('start', timeLeft => res.send(res.random(phrases.init)))
    lr.on('end', timeLeft => {
      res.send(res.random(phrases.roulette))
      delete(lr)
    })

    lr.on('tick', timeLeft => {
      if(!(timeLeft.inSeconds % 10)){
        res.send(`Noch ${timeLeft.inSeconds} Sekunden.`)
      } else if (timeLeft.inSeconds < 10) {
        res.send(timeLeft.inSeconds)
      }
    })

    lr.onDraw = groups => {
      res.send('Groups generated')
      groups.forEach(group => {
        let message = `Group: `
        for(user of group){
            message += user.name
            message += ' and '
        }
        res.send(message)
      })
    }

    // starts the game
    lr.startGame()

  })

  robot.respond(/fake user/i, res => {

    setTimeout(() => lr.addPlayer('Fabien'), 1000)
    setTimeout(() => lr.addPlayer('Rolf'), 10000)
    setTimeout(() => lr.addPlayer('Christina'), 20000)

  })

  robot.respond(/fake leave/i, res => {
    lr.remUser('Rolf')
  })

}
