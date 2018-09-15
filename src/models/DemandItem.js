import mongoose from '../services/mongoose'

const schema = new mongoose.Schema({
  title: 'string',
  category: 'string',
  description: 'string',
  urgencyLevel: 'number'
})

export default mongoose.model('DemandItem', schema)
