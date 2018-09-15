import mongoose from '../services/mongoose'

const schema = new mongoose.Schema({
  title: 'string'
})

export default mongoose.model('DemandItem', schema)
