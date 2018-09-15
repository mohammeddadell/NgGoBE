import User from '../models/User'

const UserController = (router) => {
  router.post('/user', (req, res) => {
    new User({
      name: req.body.name,
      location: req.body.location,
      count: 0
    })
      .save()
      .then(() => {
        res.send({ status: 'ok' })
      })
      .catch(err => {
        res.send({ errorMessage: err.message })
        console.log(err)
      })
  })

  router.put('/user', (req, res) => {
    User.findByIdAndUpdate(req.body._id, req.body)
      .then(() => {
        res.send({ status: 'ok' })
      })
      .catch(err => {
        res.send({ errorMessage: err.message })
        console.log(err)
      })
  })

  router.get('/user', (req, res) => {
    User.find()
      .then(users => {
        res.send(users)
      })
      .catch(err => {
        res.send({ errorMessage: err.message })
        console.log(err)
      })
  })

  router.get('/user/:id', (req, res) => {
    User.findById(req.params.id)
      .populate('giveaways')
      .then(user => {
        res.send(user)
      })
      .catch(err => {
        res.send({ errorMessage: err.message })
        console.log(err)
      })
  })

  router.delete('/user/:id', (req, res) => {
    User.deleteOne({_id: req.params.id})
      .then(() => {
        res.send({status: 'ok'})
      })
      .catch(err => {
        res.send({ errorMessage: err.message })
        console.log(err)
      })
  })
}

export default UserController
