import mongoose from '../services/mongoose'
import { Schema } from 'mongoose'

const schema = new mongoose.Schema({
  title: 'string',
  description: 'string',
  category: 'string',
  image: 'string',
  size: 'string',
  amount: 'string',
  user: { type: Schema.Types.ObjectId, ref: 'User' }
})

export default mongoose.model('DonationItem', schema)
