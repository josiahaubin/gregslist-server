import express from "express"
import HouseService from "../services/HouseService";

let _hs = new HouseService().respository

export default class HouseController {

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
      let houses = await _hs.find({})
      res.send(houses)
    } catch (error) { next(error) }
  }
  async getOne(req, res, next) {
    try {
      let house = await _hs.findById(req.params.id)
      res.send(house)
    } catch (error) { next(error) }
  }
  async create(req, res, next) {
    try {
      let house = await _hs.create(req.body)
      res.send(house)
    } catch (error) { next(error) }

  }
  async update(req, res, next) {
    try {
      let house = await _hs.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      res.send(house)
    } catch (error) { next(error) }
  }
  async delete(req, res, next) {
    try {
      let house = await _hs.findOneAndRemove({ _id: req.params.id })
      res.send("Deleted")

    } catch (error) { next(error) }
  }
}