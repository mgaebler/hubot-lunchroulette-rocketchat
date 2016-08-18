const LR = require('drawer')
const phrases = require('../phrases')




module.exports = (robot) => {

  // new user joins Lunch Roulette Channel
  robot.enter (res) => {
    res.send (res.random (phrases.enter_channel))
  }

  // user leaves Lunch Roulette Channel
  robot.leave (res) => {
    res.send (res.random (phrases.leave_channel))
  }

  // help
  robot.hear(/help/i, res => {
    res.send (res.random (phrases.help))
  })

  // init
  robot.hear(/init/i, res => {
    res.send (res.random (phrases.init))
  })

  // join
  robot.hear(/bin dabei|nehme teil|:thumbsup:|I'm in/i, res => {
    res.send (res.random (phrases.join))
  })

  // leave
  robot.respond(/raus|exit|nicht mehr|keine Zeit|:thumbsdown:/i, res => {
    res.send (res.random (phrases.leave))
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

    lr = new LR(3, 0.2)

    lr.on('addPlayer', user => res.send(user.name, res.random(phrases.join)))
    lr.on('remPlayer', user => res.send(res.random(phrases.leave)))
    //
    lr.on('start', timeLeft => res.send(res.random(phrases.init)))
    lr.on('end', timeLeft => {
      res.send(res.random(phrases.roulette))
      delete(lr)
    })

    lr.on('tick', timeLeft => res.send(`Noch ${timeLeft.inSeconds}`))

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

    lr.startGame()

    setTimeout(() => lr.addPlayer('Fabien'), 1000)
    setTimeout(() => lr.addPlayer('Rolf'), 2000)
    setTimeout(() => lr.addPlayer('Christina'), 3000)

  })

}
