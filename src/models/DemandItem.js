import mongoose from '../services/mongoose'
import { Schema } from 'mongoose'

const schema = new mongoose.Schema({
  title: 'string',
  category: 'string',
  description: 'string',
  urgencyLevel: 'number',
  user: { type: Schema.Types.ObjectId, ref: 'User' }
})

export default mongoose.model('DemandItem', schema)
