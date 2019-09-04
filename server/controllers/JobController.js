import express from "express"
import JobService from "../services/JobService";

let _js = new JobService().respository

export default class JobController {

  constructor() {
    this.router = express.Router()
      .get('', this.getAll)
      .get('/:id', this.getOne)
      .post('', this.create)
      .put('/:id', this.update)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      let jobs = await _js.find({})
      res.send(jobs)
    } catch (error) { next(error) }
  }
  async getOne(req, res, next) {
    try {
      let car = await _js.findById(req.params.id)
      res.send(car)
    } catch (error) { next(error) }
  }
  async create(req, res, next) {
    try {
      let car = await _js.create(req.body)
      res.send(car)
    } catch (error) { next(error) }

  }
  async update(req, res, next) {
    try {
      let car = await _js.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      res.send(car)
    } catch (error) { next(error) }
  }
  async delete(req, res, next) {
    try {
      let car = await _js.findOneAndRemove({ _id: req.params.id })
      res.send("Deleted")

    } catch (error) { next(error) }
  }
}