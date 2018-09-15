import DemandItem from '../models/DemandItem'

const DemandItemController = (router) => {
  router.post('/demand-items', (req, res) => {
    new DemandItem({
      title: 'demand item title'
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
