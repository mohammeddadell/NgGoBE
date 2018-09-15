import mongoose from '../services/mongoose'

const schema = new mongoose.Schema({
  annotation: String,
  amount: Number,
  timestamp: String,
  collectionTime: String,
  status: Number,
  location: {
    latitude: String,
    longitude: String,
    street: String,
    number: String,
    city: String,
    zip: String,
    country: String
  }
})

export default mongoose.model('Giveaway', schema)
