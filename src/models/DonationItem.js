import mongoose from '../services/mongoose'
import { Schema } from 'mongoose'

const schema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  image: String,
  size: String,
  amount: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' }
})

export default mongoose.model('DonationItem', schema)
