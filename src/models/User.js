import mongoose from '../services/mongoose'
import { Schema } from 'mongoose'

const schema = new mongoose.Schema({
  name: String,
  giveaways: [{ type: Schema.Types.ObjectId, ref: 'Giveaway', unique: true }],
  location: {
    latitude: String,
    longitude: String,
    street: String,
    number: String,
    city: String,
    zip: String,
    country: String
  },
  count: Number
})

export default mongoose.model('User', schema)
