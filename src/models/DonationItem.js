import mongoose from '../services/mongoose'

const schema = new mongoose.Schema({
  title: 'string',
  description: 'string',
  category: 'string',
  image: 'string',
  size: 'string',
  amount: 'string'
})

export default mongoose.model('DonationItem', schema)
