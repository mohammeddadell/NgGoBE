import DonationItem from '../models/DonationItem'

const DonationItemController = (router) => {
  router.post('/donation-items', (req, res) => {
    console.log('REQUEST: ', req.body)
    new DonationItem({
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,
      image: req.body.image,
      status: 0
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
    .findByIdAndUpdate()
    .then()
    .catch()
  })
}

export default DonationItemController
