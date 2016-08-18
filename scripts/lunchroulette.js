const LR = require('drawer')

const gameStartRandomMessages = [
  'They see me rollin'
]


var log = console.log

module.exports = (robot) => {
  robot.respond(/foo/i, res => {
    lr.addPlayer(res.envelope.user)
    // console.log(res.envelope.user)
    // console.log(res.envelope.user)
  })

  robot.respond(/game start/i, res => {
    log(res)
    res.send(res.random(gameStartRandomMessages))
    lr = new LR(3, 0.2)

    lr.onAddPlayer(user => res.send(`${user.name} ist dabei.`))
    lr.onRemPlayer(user => res.send(`${user.name} wurde entfernt.`))

    lr.onStart(timeLeft => res.send('Spiel wurde gestartet'))
    lr.onEnd(timeLeft => {
      res.send('Spiel beendet')
      delete(lr)}
    )

    lr.onTick(timeLeft => res.send(`Noch ${timeLeft.inSeconds}`))

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

    // lr.addPlayer('Fabien')
    // lr.addPlayer('Rolf')
    // lr.addPlayer('Christina')

    lr.startGame()

  })

  robot.hear(/game status/i, res => {
    res.send(lr.state)
  })
}
