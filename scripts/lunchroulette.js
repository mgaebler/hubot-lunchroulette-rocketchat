const LR = require('drawer')

const gameStartRandomMessages = [
  'They see me rollin'
]


module.exports = (robot) => {

  robot.respond(/game/i, res => {
    res.send("Badgers? BADGERS? WE DON'T NEED NO STINKIN BADGERS")
    // console.log(res)
    // res.send(res.random(gameStartRandomMessages))
    // lr = new LR(3, 0.2)
    //
    // lr.on('addPlayer', user => res.send(`${user.name} ist dabei.`))
    // lr.on('remPlayer', user => res.send(`${user.name} wurde entfernt.`))
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
