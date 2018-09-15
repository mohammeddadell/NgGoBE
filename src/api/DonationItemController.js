import DonationItem from '../models/DonationItem'

const DonationItemController = (router) => {
  router.post('/donation-items', (req, res) => {
    new DonationItem({
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,
      image: req.body.image,
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

  router.get('/donation-items', (req, res) => {
    DonationItem
    .find()
    .populate('user')
    .then(donationItems => {
      res.send(donationItems)
    })
    .catch(err => {
      console.log(err)
      res.send({ errorMessage: err.message })
    })
  })

  router.get('/donation-items/:id', (req, res) => {
    DonationItem
    .findById(req.params.id)
    .populate('user')
    .then(donationItems => {
      res.send(donationItems)
    })
    .catch(err => {
      console.log(err)
      res.send({ errorMessage: err.message })
    })
  })

  router.put('/donation-items', (req, res) => {
    DonationItem
    .findByIdAndUpdate(req.body._id, req.body)
    .then( (item) => {
      res.send(item)
    })
    .catch(err => {
      console.log(err)
      res.send({ errorMessage: err.message })
    })
  })

  router.delete('/donation-items', (req, res) => {
    DonationItem
    .deleteOne({id: req.body._id})
    .then( (item) => {
      res.send(item)
    })
    .catch(err => {
      console.log(err)
      res.send({ errorMessage: err.message })
    })
  })

}

export default DonationItemController
