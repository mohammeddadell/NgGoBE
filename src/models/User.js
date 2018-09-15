import mongoose from '../services/mongoose'
import { Schema } from 'mongoose'

const schema = new mongoose.Schema({
  name: String,
  items: { type: Schema.Types.ObjectId, ref: 'DemandItem' },
  type: Number,
  locations: Array
})

export default mongoose.model('User', schema)
