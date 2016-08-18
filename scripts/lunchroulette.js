const LR = require('drawer')
const phrases = require('../phrases')




module.exports = (robot) => {

  // help
  robot.hear(/help/i, res => {

  })

  // init
  robot.hear(/game/i, res => {

  })

  // join
  robot.hear(/game/i, res => {

  })

  // leave
  robot.hear(/game/i, res => {

  })

  // status
  robot.hear(/game/i, res => {

  })

  // reminder
  robot.respond(/game/i, res => {

  })

  // roulette
  robot.respond(/game/i, res => {

    lr = new LR(3, 0.2)

    lr.on('addPlayer', user => {
      console.log(user)
      res.send(res.random(phrases.join))
    })

    lr.on('remPlayer', user => res.send(user.name  + ' ' +  res.random(phrases.leave)))

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
    setTimeout(() => lr.addPlayer('Rolf'), 3000)
    setTimeout(() => lr.addPlayer('Christina'), 5000)

  })

}
