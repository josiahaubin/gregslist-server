import mongoose from "mongoose"
const Schema = mongoose.Schema

const _model = new Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  imgUrl: { type: String, default: "http://placehold.it/200x200" },
  description: { type: String }
})
export default class JobService {
  get respository() {
    return mongoose.model('job', _model)
  }
}