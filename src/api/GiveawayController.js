import Giveaway from '../models/Giveaway'
import User from '../models/User'

const GiveawayController = (router, io) => {
  console.log('asdada')

  io.on('connection', (socket) => {
    console.log('SOCKET CONNECTED')
  })

  io.on('accept_task', (data) => {
    console.log('accepted task')
    io.emit('accepted_giveaway', data)
  })

  router.post('/giveaway', (req, res) => {
    new Giveaway({
      annotation: req.body.annotation,
      amount: req.body.amount,
      timestamp: new Date(Date.now()).toISOString(),
      location: req.body.location,
      status: 0
    })
      .save()
      .then((giveaway) => {
        User.findByIdAndUpdate(req.body.user, {$push: {giveaways: giveaway}})
          .then((user) => {
            io.sockets.emit('new_task', giveaway)
            res.send({ status: 'ok' })
          })
          .catch(err => {
            console.log(err)
            res.send({ errorMessage: err.message })
          })
      })
      .catch(err => {
        console.log(err)
        res.send({ errorMessage: err.message })
      })
  })

  router.get('/giveaway', (req, res) => {
    Giveaway.find()
      .then((giveaways) => {
        res.send(giveaways)
      })
      .catch(err => {
        console.log(err)
        res.send({ errorMessage: err.message })
      })
  })

  router.get('/giveaway/:id', (req, res) => {
    Giveaway.findById(req.params.id)
      .populate('user')
      .then((giveaway) => {
        res.send(giveaway)
      })
      .catch(err => {
        console.log(err)
        res.send({ errorMessage: err.message })
      })
  })

  router.put('/giveaway/', (req, res) => {
    Giveaway.findByIdAndUpdate(req.body._id, req.body)
      .then((giveaway) => {
        res.send({ status: 'ok' })
      })
      .catch(err => {
        console.log(err)
        res.send({ errorMessage: err.message })
      })
  })

  router.delete('/giveaway/:id', (req, res) => {
    Giveaway.findByIdAndDelete(req.params.id)
      .then(() => {
        res.send({ status: 'ok' })
      })
      .catch(err => {
        console.log(err)
        res.send({ errorMessage: err.message })
      })
  })
}

export default GiveawayController
