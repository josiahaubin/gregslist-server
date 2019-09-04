import mongoose from "mongoose"
const Schema = mongoose.Schema

const _model = new Schema({
  bathrooms: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  imgUrl: { type: String, default: 'https//placehold.it/200x200' },
  levels: { type: Number, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true }
})
export default class HouseService {
  get respository() {
    return mongoose.model('house', _model)
  }
}
