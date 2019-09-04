import express from "express"
import CarService from "../services/CarService";

let _cs = new CarService().respository

export default class CarController {

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
      let cars = await _cs.find({})
      res.send(cars)
    } catch (error) { next(error) }
  }
  async getOne(req, res, next) {
    try {
      let car = await _cs.findById(req.params.id)
      res.send(car)
    } catch (error) { next(error) }
  }
  async create(req, res, next) {
    try {
      let car = await _cs.create(req.body)
      res.send(car)
    } catch (error) { next(error) }

  }
  async update(req, res, next) {
    try {
      let car = await _cs.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      res.send(car)
    } catch (error) { next(error) }
  }
  async delete(req, res, next) {
    try {
      let car = await _cs.findOneAndRemove({ _id: req.params.id })
      res.send("Deleted")

    } catch (error) { next(error) }
  }
}