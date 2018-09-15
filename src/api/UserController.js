import User from '../models/User'

const UserController = (router) => {
  router.post('/users', (req, res) => {
    new User({
      name: req.body.name,
      type: req.body.type,
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

  router.put('/users/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, {
      $push: { items: req.body.item }
    })
    .then(user => {
      res.send(user)
    })
    .catch(err => {
      res.send({ errorMessage: err.message })
      console.log(err)
    })
  })

  router.get('/users', (req, res) => {
    User.find()
    .populate('items')
    .then(users => {
      res.send(users)
    })
    .catch(err => {
      res.send({ errorMessage: err.message })
      console.log(err)
    })
  })

  router.get('/users/:id', (req, res) => {
    User.findById(req.params.id)
    .populate('items')
    .then(user => {
      res.send(user)
    })
    .catch(err => {
      res.send({ errorMessage: err.message })
      console.log(err)
    })
  })
}

export default UserController
