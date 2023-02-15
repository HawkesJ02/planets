import { planetsService } from "../services/PlanetsService";
import BaseController from "../utils/BaseController";


export class PlanetsController extends BaseController {
  constructor(){
    super('api/planets')
    this.router
      .get('', this.get_planets)
  }
  async get_planets(req, res, next) {
    try {
      let planets = await planetsService.get_planets()
      return res.send(planets)
    } catch (error) {
      next(error)
    }
  }
}