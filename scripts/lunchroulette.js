const LR = require('drawer')
const phrases = require('../phrases')




module.exports = (robot) => {

  // help
  robot.hear(/help/i, res => {

  })

  // init
  robot.respond(/game/i, res => {

  })

  // join
  robot.respond(/game/i, res => {

  })

  // leave
  robot.respond(/game/i, res => {

  })

  // status
  robot.respond(/game/i, res => {

  })

  // reminder
  robot.respond(/game/i, res => {
    
  })

  // roulette
  robot.respond(/game/i, res => {
    res.send(res.random(phrases.help))
    lr = new LR(3, 0.2)

    lr.on('addPlayer', user => res.send(`${user.name} ist dabei.`))
    lr.on('remPlayer', user => res.send(`${user.name} wurde entfernt.`))
    //
    // lr.on('start', timeLeft => res.send('Spiel wurde gestartet'))
    // lr.on('end', timeLeft => {
    //   res.send('Spiel beendet')
    //   delete(lr)
    // })
    //
    // lr.onTick(timeLeft => res.send(`Noch ${timeLeft.inSeconds}`))
    //
    // lr.onDraw = groups => {
    //   res.send('Groups generated')
    //   groups.forEach(group => {
    //     let message = `Group: `
    //     for(user of group){
    //         message += user.name
    //         message += ' and '
    //     }
    //     res.send(message)
    //   })
    // }

    // lr.addPlayer('Fabien')
    // lr.addPlayer('Rolf')
    // lr.addPlayer('Christina')

    // lr.startGame()

  })

}
