import mongoose from "mongoose"
const Schema = mongoose.Schema

const _model = new Schema({
  company: { type: String, required: true },
  jobTitle: { type: String, required: true },
  hours: { type: Number, required: true },
  rate: { type: Number, required: true },
  description: { type: String }
})
export default class JobService {
  get respository() {
    return mongoose.model('job', _model)
  }
}