import mongoose from '../services/mongoose'
import { Schema } from 'mongoose'

const schema = new mongoose.Schema({
  title: String,
  category: String,
  description: String,
  urgencyLevel: Number,
  status: Number,
  user: { type: Schema.Types.ObjectId, ref: 'User' }
})

export default mongoose.model('DemandItem', schema)
