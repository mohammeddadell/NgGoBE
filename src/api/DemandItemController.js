import DemandItem from '../models/DemandItem'

const DemandItemController = (router) => {
  router.post('/demand-items', (req, res) => {
    new DemandItem({
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,
      urgencyLevel: req.body.urgencyLevel,
      status: 0,
      user: req.headers.userid
    })
    .save()
    .then(() => {
      res.send({ status: 'ok' })
    })
    .catch(err => {
      console.log(err)
      res.send({ errorMessage: err.message })
    })
  })

  router.get('/demand-items', (req, res) => {
    DemandItem
    .find()
    .populate('user')
    .then(demandItems => {
      res.send(demandItems)
    })
    .catch(err => {
      console.log(err)
      res.send({ errorMessage: err.message })
    })
  })

  router.get('/demand-items/:id', (req, res) => {
    DemandItem
    .find(id)
    .populate('user')
    .then(demandItems => {
      res.send(demandItems)
    })
    .catch(err => {
      console.log(err)
      res.send({ errorMessage: err.message })
    })
  })
}

export default DemandItemController
